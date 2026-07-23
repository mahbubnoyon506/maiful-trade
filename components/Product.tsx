import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import type { Product as ProductItem } from "@/utility/types";

type ProductProps = {
  product: ProductItem;
};

export default function Product({ product }: ProductProps) {
  return (
    <>
      <div className="rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
        <div className=" w-full  group">
          <Image
            width={377}
            height={310}
            src={product.image}
            alt="product-image"
            className="w-full object-contain"
          />
        </div>

        {/* Title and Detailed Action Navigation Row */}
        <div className="pt-5 pb-2 space-y-3">
          <h3 className="font-k2d text-lg md:text-xl xl:text-2xl font-bold tracking-tight text-black">
            {product.subtitle}
          </h3>

          <Link href={`/products/${product.id}`}>
            <Button
              variant="solid"
              className="bg-[#313131] hover:bg-tertiary text-white rounded-md text-base font-poppins"
            >
              View Details
              <ArrowRight className="ml-2 w-3.5 h-3.5 stroke-[2.5]" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
