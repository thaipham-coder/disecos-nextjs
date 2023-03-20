"use client";

import React, { FC, useState } from "react";
import {
  NoSymbolIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import NcImage from "@/shared/NcImage/NcImage";
import ReviewItem from "@/components/ReviewItem";
import detail21JPG from "@/images/products/detail3-1.webp";
import detail22JPG from "@/images/products/detail3-2.webp";
import detail23JPG from "@/images/products/detail3-3.webp";
import detail24JPG from "@/images/products/detail3-4.webp";
import { PRODUCTS } from "@/data/data";
import IconDiscount from "@/components/IconDiscount";
import NcInputNumber from "@/components/NcInputNumber";
import BagIcon from "@/components/BagIcon";
import toast from "react-hot-toast";
import { StarIcon } from "@heroicons/react/24/solid";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import NotifyAddTocart from "@/components/NotifyAddTocart";
import Image, { StaticImageData } from "next/image";
import LikeSaveBtns from "@/components/LikeSaveBtns";
import AccordionInfo from "@/components/AccordionInfo";
import Policy from "../product-detail/Policy";
import ModalViewAllReviews from "../product-detail/ModalViewAllReviews";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LIST_IMAGES_GALLERY_DEMO: (string | StaticImageData)[] = [
  detail21JPG,
  detail22JPG,
  detail23JPG,
  detail24JPG,
  "https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const PRICE = 108;

const ProductDetailPage2 = ({}) => {
  const { sizes, variants, status, allOfSizes, image } = PRODUCTS[0];
  //
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");
  //
  const [variantActive, setVariantActive] = useState(0);
  const [sizeSelected, setSizeSelected] = useState(sizes ? sizes[0] : "");
  const [qualitySelected, setQualitySelected] = useState(1);
  const [isOpenModalViewAllReviews, setIsOpenModalViewAllReviews] =
    useState(false);

  //
  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}`);
  };
  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE`);
  };

  //
  const renderVariants = () => {
    if (!variants || !variants.length) {
      return null;
    }

    return (
      <div>
        <label htmlFor="">
          <span className="text-sm font-medium">
            Color:
            <span className="ml-1 font-semibold">
              {variants[variantActive].name}
            </span>
          </span>
        </label>
        <div className="flex mt-3">
          {variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setVariantActive(index)}
              className={`relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer ${
                variantActive === index
                  ? "border-primary-6000 dark:border-primary-500"
                  : "border-transparent"
              }`}
            >
              <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                <Image
                  src={variant.thumbnail || ""}
                  alt=""
                  className="absolute w-full h-full object-cover"
                  fill
                  sizes="100px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const notifyAddTocart = () => {
    toast.custom(
      (t) => (
        <NotifyAddTocart
          productImage={image}
          qualitySelected={qualitySelected}
          show={t.visible}
          sizeSelected={sizeSelected}
          variantActive={variantActive}
        />
      ),
      { position: "top-right", id: "nc-product-notify", duration: 3000 }
    );
  };

  const renderSizeList = () => {
    if (!allOfSizes || !sizes || !sizes.length) {
      return null;
    }
    return (
      <div>
        <div className="flex justify-between font-medium text-sm">
          <label htmlFor="">
            <span className="">
              Size:
              <span className="ml-1 font-semibold">{sizeSelected}</span>
            </span>
          </label>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="##"
            className="text-primary-6000 hover:text-primary-500"
          >
            See sizing chart
          </a>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-3">
          {allOfSizes.map((size, index) => {
            const isActive = size === sizeSelected;
            const sizeOutStock = !sizes.includes(size);
            return (
              <div
                key={index}
                className={`relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 ${
                  sizeOutStock
                    ? "text-opacity-20 dark:text-opacity-20 cursor-not-allowed"
                    : "cursor-pointer"
                } ${
                  isActive
                    ? "bg-primary-6000 border-primary-6000 text-white hover:bg-primary-6000"
                    : "border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                }`}
                onClick={() => {
                  if (sizeOutStock) {
                    return;
                  }
                  setSizeSelected(size);
                }}
              >
                {size}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderStatus = () => {
    if (!status) {
      return null;
    }
    const CLASSES =
      "text-sm flex items-center text-slate-700 text-slate-900 dark:text-slate-300";
    if (status === "New in") {
      return (
        <div className={CLASSES}>
          <SparklesIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "50% Discount") {
      return (
        <div className={CLASSES}>
          <IconDiscount className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "Sold Out") {
      return (
        <div className={CLASSES}>
          <NoSymbolIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "limited edition") {
      return (
        <div className={CLASSES}>
          <ClockIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    return null;
  };

  const renderSectionSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap lg:shadow-lg">
        <div className="space-y-7 lg:space-y-8">
          {/* PRICE */}
          <div className="">
            {/* ---------- 1 HEADING ----------  */}
            <div className="flex items-center justify-between space-x-5">
              <div className="flex text-2xl font-semibold">
                ${PRICE.toFixed(2)}
              </div>

              <a
                href="#reviews"
                className="flex items-center text-sm font-medium"
              >
                <div className="">
                  <StarIcon className="w-5 h-5 pb-[1px] text-orange-400" />
                </div>
                <span className="ml-1.5 flex">
                  <span>4.9 </span>
                  <span className="mx-1.5">·</span>
                  <span className="text-slate-700 dark:text-slate-400 underline">
                    142 reviews
                  </span>
                </span>
              </a>
            </div>

            {/* ---------- 3 VARIANTS AND SIZE LIST ----------  */}
            <div className="mt-6 space-y-7 lg:space-y-8">
              <div className="">{renderVariants()}</div>
              <div className="">{renderSizeList()}</div>
            </div>
          </div>
          {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
          <div className="flex space-x-3.5">
            <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
              <NcInputNumber
                defaultValue={qualitySelected}
                onChange={setQualitySelected}
              />
            </div>
            <ButtonPrimary
              className="flex-1 flex-shrink-0"
              onClick={notifyAddTocart}
            >
              <BagIcon className="hidden sm:inline-block w-5 h-5 mb-0.5" />
              <span className="ml-3">Add to cart</span>
            </ButtonPrimary>
          </div>

          {/* SUM */}
          <div className="hidden sm:flex flex-col space-y-4 ">
            <div className="space-y-2.5">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span className="flex">
                  <span>{`$${PRICE.toFixed(2)}  `}</span>
                  <span className="mx-2">x</span>
                  <span>{`${qualitySelected} `}</span>
                </span>

                <span>{`$${(PRICE * qualitySelected).toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Tax estimate</span>
                <span>$0</span>
              </div>
            </div>
            <div className="border-b border-slate-200 dark:border-slate-700"></div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{`$${(PRICE * qualitySelected).toFixed(2)}`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Heavy Weight Hoodie
          </h2>
          <div className="flex items-center mt-4 sm:mt-5">
            <a
              href="#reviews"
              className="hidden sm:flex items-center text-sm font-medium "
            >
              <div className="">
                <StarIcon className="w-5 h-5 pb-[1px] text-slate-800 dark:text-slate-200" />
              </div>
              <span className="ml-1.5">
                <span>4.9</span>
                <span className="mx-1.5">·</span>
                <span className="text-slate-700 dark:text-slate-400 underline">
                  142 reviews
                </span>
              </span>
            </a>
            <span className="hidden sm:block mx-2.5">·</span>
            {renderStatus()}

            <div className="ml-auto">
              <LikeSaveBtns />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="block lg:hidden">{renderSectionSidebar()}</div>

        {/*  */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/*  */}
        <AccordionInfo panelClassName="p-4 pt-3.5 text-slate-600 text-base dark:text-slate-300 leading-7" />
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap !border-b-0 !pb-0">
        <h2 className="text-2xl font-semibold">Product details</h2>
        {/* <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div> */}
        <div className="prose prose-sm sm:prose dark:prose-invert sm:max-w-4xl">
          <p>
            The patented eighteen-inch hardwood Arrowhead deck --- finely
            mortised in, makes this the strongest and most rigid canoe ever
            built. You cannot buy a canoe that will afford greater satisfaction.
          </p>
          <p>
            The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
            1922. Wickett had previously worked for the Old Town Canoe Co from
            1900 to 1914. Manufacturing of the classic wooden canoes in Valley
            Park, Missouri ceased in 1978.
          </p>
          <ul>
            <li>Regular fit, mid-weight t-shirt</li>
            <li>Natural color, 100% premium combed organic cotton</li>
            <li>
              Quality cotton grown without the use of herbicides or pesticides -
              GOTS certified
            </li>
            <li>Soft touch water based printed in the USA</li>
          </ul>
        </div>
        {/* ---------- 6 ----------  */}
        <Policy />
      </div>
    );
  };

  const renderReviews = () => {
    return (
      <div id="reviews" className="scroll-mt-[150px]">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold flex items-center">
          <StarIcon className="w-7 h-7 mb-0.5" />
          <span className="ml-1.5"> 4,87 · 142 Reviews</span>
        </h2>

        {/* comment */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
            <ReviewItem />
            <ReviewItem
              data={{
                comment: `I love the charcoal heavyweight hoodie. Still looks new after plenty of washes. 
                  If you’re unsure which hoodie to pick.`,
                date: "December 22, 2021",
                name: "Stiven Hokinhs",
                starPoint: 5,
              }}
            />
            <ReviewItem
              data={{
                comment: `The quality and sizing mentioned were accurate and really happy with the purchase. Such a cozy and comfortable hoodie. 
                Now that it’s colder, my husband wears his all the time. I wear hoodies all the time. `,
                date: "August 15, 2022",
                name: "Gropishta keo",
                starPoint: 5,
              }}
            />
            <ReviewItem
              data={{
                comment: `Before buying this, I didn't really know how I would tell a "high quality" sweatshirt, but after opening, I was very impressed. 
                The material is super soft and comfortable and the sweatshirt also has a good weight to it.`,
                date: "December 12, 2022",
                name: "Dahon Stiven",
                starPoint: 5,
              }}
            />
          </div>

          <ButtonSecondary
            onClick={() => setIsOpenModalViewAllReviews(true)}
            className="mt-10 border border-slate-300 dark:border-slate-700 "
          >
            Show me all 142 reviews
          </ButtonSecondary>
        </div>
      </div>
    );
  };

  return (
    <div className={`ListingDetailPage nc-ProductDetailPage2`}>
      <>
        <header className="container mt-8 sm:mt-10">
          <div className="relative ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
              <div
                className="col-span-2 md:col-span-1 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
                onClick={handleOpenModalImageGallery}
              >
                <NcImage
                  alt=""
                  containerClassName="aspect-w-3 aspect-h-4 md:absolute md:inset-0"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl"
                  src={LIST_IMAGES_GALLERY_DEMO[0]}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-40 transition-opacity"></div>
              </div>

              {/*  */}
              <div
                className="col-span-1 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
                onClick={handleOpenModalImageGallery}
              >
                <NcImage
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  containerClassName="absolute inset-0"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl"
                  src={LIST_IMAGES_GALLERY_DEMO[1]}
                />
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-40 transition-opacity"></div>
              </div>

              {/*  */}
              {[LIST_IMAGES_GALLERY_DEMO[2], LIST_IMAGES_GALLERY_DEMO[3]].map(
                (item, index) => (
                  <div
                    key={index}
                    className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                      index >= 2 ? "block" : ""
                    }`}
                  >
                    <NcImage
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      containerClassName="aspect-w-6 aspect-h-5 lg:aspect-h-4"
                      className="object-cover w-full h-full rounded-md sm:rounded-xl "
                      src={item || ""}
                    />

                    {/* OVERLAY */}
                    <div
                      className="absolute inset-0 bg-slate-900 bg-opacity-20 opacity-0 hover:opacity-60 transition-opacity cursor-pointer"
                      onClick={handleOpenModalImageGallery}
                    />
                  </div>
                )
              )}
            </div>
            <div
              className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-white text-slate-500 cursor-pointer hover:bg-slate-200 z-10"
              onClick={handleOpenModalImageGallery}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2 text-neutral-800 text-sm font-medium">
                Show all photos
              </span>
            </div>
          </div>
        </header>
      </>

      {/* MAIn */}
      <main className="container relative z-10 mt-9 sm:mt-11 flex ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-10 lg:pr-14 lg:space-y-14">
          {renderSection1()}
          {renderSection2()}
        </div>

        {/* SIDEBAR */}
        <div className="flex-grow">
          <div className="hidden lg:block sticky top-28">
            {renderSectionSidebar()}
          </div>
        </div>
      </main>

      {/* OTHER SECTION */}
      <div className="container pb-24 lg:pb-28 pt-14 space-y-14">
        <hr className="border-slate-200 dark:border-slate-700" />

        {renderReviews()}

        <hr className="border-slate-200 dark:border-slate-700" />

        <SectionSliderProductCard
          heading="Customers also purchased"
          subHeading=""
          headingFontClassName="text-2xl font-semibold"
          headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
        />
      </div>

      {/* MODAL VIEW ALL REVIEW */}
      <ModalViewAllReviews
        show={isOpenModalViewAllReviews}
        onCloseModalViewAllReviews={() => setIsOpenModalViewAllReviews(false)}
      />

      <ListingImageGallery
        isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
        onClose={handleCloseModalImageGallery}
        images={LIST_IMAGES_GALLERY_DEMO.map((item, index) => {
          return {
            id: index,
            url: item,
          };
        })}
      />
    </div>
  );
};

export default ProductDetailPage2;
