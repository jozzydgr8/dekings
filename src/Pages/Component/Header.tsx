import towerBackground from '../../asset/telecommunication-thumbnail.png'
import { FlatButton } from '../../Shared/FlatButton';
import { headerFeatures } from '../../Shared/data';
export const Header = ()=>{
    const styles = {
         content:{
            display:'flex',
            margin:'15px 0',
            gap:'10px'
        },
        section:{
        backgroundImage:`url(${towerBackground})`,
        backgroundSize:'cover',
        backgroundPosition:'center center',
        color:`white`,
        minHeight:'80vh'
    }
    }
    return(
        <section style={styles.section} >
           
                <div className="container-fluid header-gradient-background">
                    <div className="row">

                        <div className="col-md-6">
                            <div>
                                <h1>
                                    A distinct leading provider of telecommunication  and information technology services
                                </h1>
                                <div>
                                    <FlatButton title='Learn More' className='btndark'/>
                                    <FlatButton title='Contact Us' className='btnalternate'/>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6">
                            <div className="row">
                            {headerFeatures.map((feature, index) => (
                                <div key={index} className="col-md-6" style={{...styles.content, flexDirection:'row'}}>
                                    {feature.icon}
                                    <div>
                                    <b>{feature.title}</b>
                                    <br />
                                    {feature.subtitle}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
               
            </div>
             
            
        </section>
    )
}