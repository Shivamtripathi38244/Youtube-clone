import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextapi";
import LeftNav from "./LeftNav";
import VedioCard from "./VedioCard";

const Feed = () => {
    const { loading, Searchresult } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-5">
                    {!loading && Searchresult &&
                        Searchresult.map((item) => {
                            if (item.type !== "video") return false;
                            return (
                                <VedioCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Feed;