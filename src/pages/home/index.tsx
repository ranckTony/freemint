import styles from "./index.module.less";

import page1 from "@/assets/page1.jpeg";
import page2 from "@/assets/page2.jpeg";
import page3 from "@/assets/page3.jpeg";
import page4 from "@/assets/page4.jpeg";
import page5 from "@/assets/page5.jpeg";
import page6 from "@/assets/page6.jpeg";

function Home() {
    return (
        <div className={styles.imgContainer}>
            <img src={page1} alt=''/>
            <img src={page2} alt=''/>
            <img src={page3} alt=''/>
            <img src={page4} alt=''/>
            <img src={page5} alt=''/>
            <img src={page6} alt=''/>
        </div>
    )
}

export default Home;
