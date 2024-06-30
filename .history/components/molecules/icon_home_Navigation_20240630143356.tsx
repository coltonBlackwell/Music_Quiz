import Image from "next/image";
import HomeIcon from "../../components/atoms/icon_home"

export default function Icon_Home_Navigation(){
    return(
        <div style={{ border: '2px solid black', width: '100%', backgroundColor: "white", color:"white", display:"flex", flexDirection:'row' }}>
            <HomeIcon />
            <p>Home</p>
        </div>
    );
}