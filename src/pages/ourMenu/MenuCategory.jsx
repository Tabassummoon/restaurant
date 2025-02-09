import PrimaryButton from "../../components/PrimaryButton";
import CoverImage from "../shared/CoverImage";
import MenuItem from "../shared/MenuItem";

const MenuCategory = ({item,title,bannerImg}) => {
  return (
    <div>
        <div>
{
  title && <CoverImage
  title={title}
bannerImg={bannerImg}

></CoverImage>
}
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-10">
        {
       item.map(food=><MenuItem
       key={food._id}
    item={food}
    ></MenuItem>
)
}
      </div>
      <PrimaryButton
      title="Order your favourite food"
      ></PrimaryButton>

    </div>
  );
};

export default MenuCategory;