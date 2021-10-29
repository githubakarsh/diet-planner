
export const TableComponent = ({ data }) => {
    const headersOfData = ["name", "grams", "units"];
    console.log(data, "headers of data");

    return <table>
        <thead>
        <tr>
            {headersOfData?.map((item) => {
                    return <th>{item}</th>
                })}
            </tr>
        </thead>
        <tbody>
            
                {data?.map(item => {
                    return <tr>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.units}</td>
                        </tr>
                })}
            
        </tbody>

    </table>
}