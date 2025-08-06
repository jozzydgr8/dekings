import { Row, Col } from "antd"
import { services } from "../../Shared/data"
const styles = {
    content:{
        width:'350px', padding:'15px',
        minHeight:'400px',
        boxShadow: '0px 2px 4px #E30613' ,
        borderRadius:'16px'
    },
    contentimage:{
        backgroundSize:'cover',
        backgroundPosition:'center center',
        height:"200px",
        width:'350px'
    }
}
export const Services = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2>Services</h2>
                <div style={{display:'flex', justifyContent:'center'}}>
                <Row gutter={[16,24]}>
                    {services.map((service,index)=>(
                        <Col key={index} md={8} sm={12} xs={24}>
                            <div style={styles.content}>
                                
                                <div style={{display:"flex", justifyContent:"center"}}>
                                    <div style={{...styles.contentimage, backgroundImage:`url(${service.image})`}}>

                                </div>
                                </div>

                                <br/>
                                <div>
                                    <h4 style={{textTransform:"capitalize", color:'#E30613'}}>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                </div>
            </div>
        </section>
    )
}