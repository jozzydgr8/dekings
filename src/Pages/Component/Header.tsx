import towerBackground from '../../asset/telecommunication-thumbnail.png'
import { FlatButton } from '../../Shared/FlatButton'
export const Header = ()=>{
    const styles = {
        section:{
        backgroundImage:`url(${towerBackground})`,
        backgroundSize:'cover',
        backgroundPosition:'center center',
        color:`white`,
        height:'80vh'
    }
    }
    return(
        <section style={styles.section}>
            <div className="container-fluid" style={{height:"100%"}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center",  height:"100%"}}>
                <h1>
                   DGC is a distinct leading provider of telecommunication  and information technology services
                </h1>
                <div>
                    <FlatButton title='Learn More' className='btndark'/>
                    <FlatButton title='Contact Us' className='btnalternate'/>
                </div>
                </div>
            </div>
        </section>
    )
}