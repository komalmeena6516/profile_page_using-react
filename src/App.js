
import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import "./style.css";


// we can make an array to create the diffenent info components
const info_array = [

    {
        name: "Skills",
        descripttion: "Stars are the most widely recognized astronomical objects, and represent the most fundamental building blocks of galaxies. The age, distribution, and composition of the stars in a galaxy trace the history, dynamics, and evolution of that galaxy. Moreover, stars are responsible for the manufacture and distribution of heavy elements such as carbon, nitrogen, and oxygen, and their characteristics are intimately tied to the characteristics of the planetary systems that may coalesce about them. Consequently, the study of the birth, life, and death of stars is central to the field of astronomy.",
        cls_property: "info1"
    },
     {
        name: "Qualification",
        descripttion: "Stars are the most widely recognized astronomical objects, and represent the most fundamental building blocks of galaxies. The age, distribution, and composition of the stars in a galaxy trace the history, dynamics, and evolution of that galaxy. Moreover, stars are responsible for the manufacture and distribution of heavy elements such as carbon, nitrogen, and oxygen, and their characteristics are intimately tied to the characteristics of the planetary systems that may coalesce about them. Consequently, the study of the birth, life, and death of stars is central to the field of astronomy.",
        cls_property: "info2"
    },
     {
        name: "Contact",
        descripttion: "Stars are the most widely recognized astronomical objects, and represent the most fundamental building blocks of galaxies. The age, distribution, and composition of the stars in a galaxy trace the history, dynamics, and evolution of that galaxy. Moreover, stars are responsible for the manufacture and distribution of heavy elements such as carbon, nitrogen, and oxygen, and their characteristics are intimately tied to the characteristics of the planetary systems that may coalesce about them. Consequently, the study of the birth, life, and death of stars is central to the field of astronomy.",
        cls_property: "info1"
    }

]
const App = () => {
    return (
        <div>
            <Navbar />
          
            {info_array.map((value) => 
                <Info
                    name={value.name}
                    descripttion={value.descripttion}
                    class_property={value.cls_property}
                />
            )}
        </div>

    )
}
export default App;