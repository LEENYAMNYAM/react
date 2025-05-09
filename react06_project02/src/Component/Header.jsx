import './Header.css'

function Header(){
    return(
        <div>
            <h2> 오늘은 </h2>
            <h4> ToDateString : {new Date().toDateString()} </h4>
            <h4> ToLocaleDateString :  {new Date().toLocaleDateString()} </h4>
            <h4> ToLocaleTimeString : {new Date().toLocaleTimeString()} </h4>
            <h4> ToLocaleString : {new Date().toLocaleString()} </h4>
        </div>
    )
}
export default Header