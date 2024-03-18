import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/cabins.jpg" alt="Category - Cabins" width={20} height={20} />

                <span className="text-xs">Cabins</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/amazing_views.jpg" alt="Category - Amazing Views" width={20} height={20} />

                <span className="text-xs">Amazing Views</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/lakefront.jpg" alt="Category - Lakefront" width={20} height={20} />

                <span className="text-xs">Lakefront</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/rooms.jpg" alt="Category - Rooms" width={20} height={20} />

                <span className="text-xs">Rooms</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/chefs_kitchens.jpg" alt="Category - Chef's Kitchens" width={20} height={20} />

                <span className="text-xs">Chef's kitchens</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/omg.jpg" alt="Category - OMG!" width={20} height={20} />

                <span className="text-xs">OMG!</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/beachfront.jpg" alt="Category - Beachfront" width={20} height={20} />

                <span className="text-xs">Beachfront</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/treehouses.jpg" alt="Category - Treehouses" width={20} height={20} />

                <span className="text-xs">Treehouses</span>
            </div>
            
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/mansions.jpg" alt="Category - Mansions" width={20} height={20} />

                <span className="text-xs">Mansions</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/amazing_pools.jpg" alt="Category - Amazing Pools" width={20} height={20} />

                <span className="text-xs">Amazing Pools</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/off_the_grid.jpg" alt="Category - Off The Grid" width={20} height={20} />

                <span className="text-xs">Off-the-grid</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/domes.jpg" alt="Category - Domes" width={20} height={20} />

                <span className="text-xs">Domes</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/houseboats.jpg" alt="Category - Houseboats" width={20} height={20} />

                <span className="text-xs">Houseboats</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/tiny_homes.jpg" alt="Category - Tiny Homes" width={20} height={20} />

                <span className="text-xs">Tiny</span>
            </div>
        </div>
    )
}

export default Categories;