export default function MyDevice({mydata}){
    return(
        <div> MyDevice
            <table>
                <thead>
                <tr>
                    <th>이름</th>
                    <th>RAM</th>
                    <th>Home Button</th>
                    <th>Touch ID</th>
                    <th>Face ID</th>
                </tr>
                </thead>
                <tbody>
            {
                mydata.myDeviceData.map((item, idx)=>{
                    // console.log('item : ', item.name, item.RAM, item.HomeButton, item.TouchID, item.FaceID)
                const {name, RAM, HomeButton, TouchID, FaceID} = item
                    return (
                        <tr key={idx}>
                        <td>{name}</td>
                        <td>{RAM}</td>
                        <td>{String(HomeButton)}</td>
                        <td>{TouchID}</td>
                        <td>{FaceID}</td>
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
        </div>

    )
}