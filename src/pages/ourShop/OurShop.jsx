import ourShop from "../../assets/shop/banner2.jpg"
import useMenu from "../../hooks/useMenu";
import CoverImage from "../shared/CoverImage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import OurShopTab from "./OurShopTab";

const OurShop = () => {

    const [menu] = useMenu()
    const drink = menu.filter(food=> food.category === "drinks")
    const dessert = menu.filter(food=> food.category === "dessert")
    const pizza = menu.filter(food=> food.category === "pizza")
    const salad = menu.filter(food=> food.category === "salad")
    const soup = menu.filter(food=> food.category === "soup")
   
  return (
    <div>
<CoverImage
title="Our Shop"
bannerImg={ourShop}
></CoverImage>
<div>


<Tabs className="max-w-7xl mx-auto">
    <TabList className="w-96 mx-auto">
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel >
    <OurShopTab
    foods={salad}
    ></OurShopTab>
    </TabPanel>
    <TabPanel>
      <OurShopTab
      foods={soup}
      ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
      foods={pizza}
      ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
      foods={dessert}
      ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
      foods={drink}
      ></OurShopTab>
    </TabPanel>
  </Tabs>
  </div>
    </div>
  );
};

export default OurShop;