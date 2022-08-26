import './style.css'
export default function EachCustomer(props) {
    const id = props.id;
    const data = props.data
    let customerDetail = data.find((el) => el.id === id);
    let julCost = customerDetail.JUL.reduce((partialSum, a) => partialSum + a, 0);
    let augCost = customerDetail.AUG.reduce((partialSum, a) => partialSum + a, 0);
    let sepCost = customerDetail.SEP.reduce((partialSum, a) => partialSum + a, 0);
    let totalCost = julCost + augCost + sepCost;
    const transactionReward = (n) => {
        if (n <= 50) {
            return 0;
        } else if (100 >= n && n > 50) {
            return n - 50;
        } else {

            return ((n - 100) * 2) + 50;
        }
    }
    const julPoints = customerDetail.JUL.map((el) => transactionReward(el)).reduce((partialSum, a) => partialSum + a, 0);;
    const augPoints = customerDetail.AUG.map((el) => transactionReward(el)).reduce((partialSum, a) => partialSum + a, 0);;
    const sepPoints = customerDetail.SEP.map((el) => transactionReward(el)).reduce((partialSum, a) => partialSum + a, 0);;
    const totalpoints = julPoints+augPoints+sepPoints;
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>JUL TOTAL POINTS</th>
                        <th>AUG TOTAL POINTS</th>
                        <th>SEP TOTAL POINTS</th>
                        <th>Quart Amount</th>
                        <th>Quartly Reward Points</th>
                    </tr>
                    <tr>
                        <td>{customerDetail.id}</td>
                        <td>{customerDetail.name}</td>
                        <td>{julPoints}</td>
                        <td>{augPoints}</td>
                        <td>{sepPoints}</td>
                        <td>{totalCost}</td>
                        <td>{totalpoints}</td>


                    </tr>
                </tbody>


            </table>
        </div>
    )
}