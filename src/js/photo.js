import building from "../png/buildingPhoto.jpg";
import building2 from "../png/building.png"
import companiPhoto0 from "../png/Rectangle1.png";
import companiPhoto1 from "../png/Rectangle2.png";
import companiPhoto2 from "../png/Rectangle3.png";
import project1 from '../png/project1.png';
import project2 from '../png/project2.png';
import project3 from '../png/project3.png';
import project4 from '../png/project4.png';
import project5 from '../png/project5.png';
import photo from "../png/image129.png";
import logo from "../png/Group111.png";

const photoAdd = (img, photo)=>{
    document.querySelector(img).src = photo;
};


photoAdd(".conten__photo_building",building);
photoAdd(".conten__photo_building2",building2);
photoAdd(".compani_photo0",companiPhoto0);
photoAdd(".compani_photo1",companiPhoto2);
photoAdd(".compani_photo2",companiPhoto1);
photoAdd(".compani_photo2",companiPhoto1);
photoAdd(".photo_of_project1",project1);
photoAdd(".photo_of_project2",project2);
photoAdd(".photo_of_project3",project3);
photoAdd(".photo_of_project4",project4);
photoAdd(".photo_of_project5",project5);
photoAdd(".contact_us__case__photo",photo);
photoAdd(".logo",logo)