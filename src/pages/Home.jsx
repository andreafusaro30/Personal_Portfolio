import { motion } from "framer-motion";
import PortPic from "../assets/selfie.jpg";

function Home(){
    return(
        <div className="container mt-5">
            <motion.h1 
             initial={{ opacity: 0, y: -50 }} 
             animate={{ opacity: 1, y: 0}}
            > 
            Portfolio
            
            </motion.h1>
            <img src={PortPic} alt="Profile Image" className="image" />
             
            
            <motion.p
                initial={{ opacity: 0}}
                animate={{opacity: 1}}
            > 
            Hello! My name is Andrea Fusaro and this is my portfolio!
            </motion.p>    
        </div>
    );    
}

export default Home;