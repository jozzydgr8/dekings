import {

  CustomerServiceOutlined,
  GlobalOutlined,
  LockOutlined,
  ThunderboltOutlined,
 
} from "@ant-design/icons";
import backgroundDemo from '../asset/BOT_thumbcitronix_.jpg'

export const headerFeatures = [
  
  {
    icon: <CustomerServiceOutlined className="headericons" />,
    title: "24/7",
    abouttitle: "24/7",
    subtitle: "Customer Support",
    abbtitle: "Support"
  },
  {
    icon: <GlobalOutlined className="headericons" />,
    title: "150+",
    abouttitle: "150+",
    subtitle: "Global Connections",
    abbtitle: "Global"
  },
  {
    icon: <LockOutlined className="headericons" />,
    title: "End-to-End",
    abouttitle: "Encrypted",
    subtitle: "Secure Communication",
    abbtitle: "Security"
  },
  {
    icon: <ThunderboltOutlined className="headericons" />,
    title: "High-Speed",
    abouttitle: "5G / Fiber",
    subtitle: "Data Solutions",
    abbtitle: "Speed"
  }
];

export const services = [
    {
        title:'mechanical & Elect',
        description:'Electrical Safety audit is a systematic approach to evaluate potential hazards and to recommend suggestions for improvement.',
        image:backgroundDemo
    },
    {
        title:'construction',
        description:'Our design team has the ability and expertise to carry out the full detail design and production of installation drawings and documents',
        image:backgroundDemo
    },
    {
        title:'Security',
        description:'We make sure that correct materials and equipment are used and agreed procedures are implemented during fabrication, installation, testing and flushing.',
        image:backgroundDemo
    },
    {
        title:'marking & coding',
        description:'We are the franchise holder of Citronix, a leading global supplier of continuous inkjet printers.',
        image:backgroundDemo
    },
    {
        title:'telecommunications',
        description:'We bring local knowledge to our clients, offering innovative solutions, insight into cutting-edge developments and delivering solutions that increase business efficiency.',
        image:backgroundDemo
    },
    {
        title:'maintenance',
        description:'Preventive of scheduled maintenance, where equipment or facilities are inspected, maintained and protected before breakdown or other problems occur.',
        image:backgroundDemo
    }
]
