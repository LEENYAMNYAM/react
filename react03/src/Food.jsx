// const Food = ({food1}) => {
//     return(
//         <div>
//             번호 : {food1.id}<br/>
//             이름 : {food1.name}<br/>
//             평점 : {food1.rating}<br/>
//             사진 : <img src={food1.image}
//                       style={{width:'100px', herght:'100px'}}/> <p/>
//         </div>
//     )
// }
const Food = ({food1}) => {
    const {id, name, image, rating} = food1
    return(
        <div>
            번호 : {id}<br/>
            이름 : {name}<br/>
            평점 : {rating}<br/>
            사진 : <img src={image}
                      style={{width:'100px', herght:'100px'}}/> <p/>
        </div>
    )
}
export default Food;