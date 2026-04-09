import React from 'react'

function Home() {
  return (
    <div className="px-10 mt-5 flex justify-center gap-8">
      <div className="w-1/4 flex flex-col">
            <div className="h-80 w-50 ml-35 bg-white rounded-2xl overflow-visible mt-0">
                <div className="bg-blue-200 h-24 rounded-t-xl relative ">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQG7uIyDbbKpOQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722582550931?e=1776902400&v=beta&t=NAG6dq42XciuokTSOaWXhhu16pSmpUD2ngH37jW8rEI"
                        alt="" className=" w-20 h-20 rounded-full border-4 border-white absolute left-5 top-full -translate-y-1/2"/>

                </div>
                <div className="m-5  mt-12">
                    <h1 className="font-semibold text-xl">Jagrit Khurana</h1>
                    <p className="text-xs">B.Tech (CSE) Student at Guru Tegh Bahadur Institute Of Technology</p>
                    <p className="text-xs opacity-75">Delhi</p>
                    <p className="text-xs">St.Thomas school,Dwarka</p>

                </div>
            </div>
            <div className="h-13 w-50 ml-35 mt-2  bg-white rounded-xl items-center">
                <span className="text-xs hover:cursor-pointer hover:underline font-bold opacity-75 m-5">Profile
                    viewers</span><span
                    className="text-xs hover:cursor-pointer hover:underline font-bold opacity-75 text-blue-400">5</span>
                <div></div>
                <span className="text-xs hover:cursor-pointer hover:underline font-bold opacity-75 m-5">Profile
                    impersions</span><span
                    className="text-xs hover:cursor-pointer hover:underline font-bold opacity-75 text-blue-400">13</span>
            </div>
            <div className="h-50 w-50 ml-35  mt-2 gap-0  bg-white rounded-xl flex flex-col">
                <div className="m-5 h-1 flex gap-4">
                    <img src="https://cdn-icons-png.flaticon.com/128/102/102279.png" alt=""
                        className=" mt-1 h-2.5 w-2.5 hover:cursor-pointer hover:underline"/>
                    <p className="text-xs hover:cursor-pointer hover:underline font-bold ">Saved items</p>
                </div>
                <div className="m-5 flex gap-4 h-1">
                    <img src="https://cdn-icons-png.flaticon.com/128/681/681494.png" alt=""
                        className=" mt-0 h-2.5 w-2.5 hover:cursor-pointer hover:underline"/>
                    <p className="text-xs hover:cursor-pointer hover:underline font-bold ">Groups</p>

                </div>
                <div className="m-5 flex gap-4 h-1">
                    <img src="https://cdn-icons-png.flaticon.com/128/12950/12950959.png" alt=""
                        className=" mt-1 h-2.5 w-2.5 hover:cursor-pointer hover:underline"/>
                    <p className="text-xs hover:cursor-pointer hover:underline font-bold ">Newsletters</p>

                </div>
                <div className="m-5 flex gap-4 h-1">
                    <img src="https://cdn-icons-png.flaticon.com/128/16956/16956841.png" alt=""
                        className=" mt-1 h-2.5 w-2.5 hover:cursor-pointer hover:underline"/>
                    <p className="text-xs hover:cursor-pointer hover:underline font-bold ">Events</p>

                </div>
            </div>

        </div>
        <div className="w-2/4 ">
            <div className="w-150 h-auto bg-white rounded-xl">
                <div className="flex">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQG7uIyDbbKpOQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722582550931?e=1776902400&v=beta&t=NAG6dq42XciuokTSOaWXhhu16pSmpUD2ngH37jW8rEI"
                        alt="" className=" rounded-full p-2  w-20 h-20  hover:cursor-pointer"/>
                    <input type="text" placeholder="Start a post "
                        className=" w-120 rounded-full px-5 text-sm font-medium  h-12 border mt-4 border-gray-400 hover:cursor-pointer hover:bg-gray-800"/>

                </div>
                <div className="flex">
                    <div className="flex m-2 gap-8 mx-10  ">
                        <div
                            className="flex gap-2 hover:bg-stone-200  items-center px-3 py-2 hover:cursor-pointer rounded-lg">
                            <img src="https://cdn-icons-png.flaticon.com/128/14034/14034359.png" alt=""
                                className="w-6 h-6  "/>
                            <p
                                className="font-bold opacity-75  hover:bg-stone-200  items-center px-3 py-2 hover:cursor-pointer ">
                                Video</p>
                        </div>
                        <div
                            className="flex gap-2 items-center px-3 py-2  hover:bg-stone-200 hover:cursor-pointer rounded-lg ">
                            <img src="https://cdn-icons-png.flaticon.com/128/14385/14385397.png" alt=""
                                className="w-6 h-6  "/>
                            <p className="font-bold opacity-75">Photos</p>
                        </div>
                        <div
                            className="flex gap-2 items-center px-3 py-2  hover:bg-stone-200  hover:cursor-pointer rounded-lg">
                            <img src="https://cdn-icons-png.flaticon.com/128/6612/6612250.png" alt="" className="w-6 h-6  "/>
                            <p className="font-bold opacity-75"> Write article</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-150 h-auto bg-white rounded-xl mt-4">
                <div className="m-3 p-3 flex gap-2 ">
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" className="h-10 w-10 "/>
                    <p className="font-semibold text-xl opacity-75 mt-1">Linkdeln</p>
                </div>
                <div className="m-2 p-2 mt-0 pt-0">
                    <p>Personalize your search—filter jobs by location, experience level, benefits, and more. <a
                            className=" text-blue-500 underline" href=" https://lnkd.in/gpPKVaQ7"> https://lnkd.in/gpPKVaQ7</a> </p>
                </div>
                <div>
                    <img src="https://media.licdn.com/dms/image/v2/D5622AQHouQ_7dT89DA/feedshare-shrink_800/B56ZtIhJznJEAk-/0/1766448209434?e=1776902400&v=beta&t=15vbqBQvSGEE8SHa_1nXhC1u6GCzY1uc3lx1q19SrBg" alt=""/>
                </div>
            </div>

        </div>
        <div className="w-1/4 h-auto bg-white rounded-2xl ">
            <div className="m-5">
                <h1 className="text-2xl">LinkedIn News</h1>
                <p className="opacity-75">Top stories</p>
                <h2 className="hover:cursor-pointer hover:underline">More corporates choose NBFCs</h2>
                <p className="text-xs">2h ago • 1,403 readers</p>
                <h2 className="hover:cursor-pointer hover:underline">Techies now GCC bound</h2>
                <p className="text-xs">2h ago • 1,403 readers</p>
                <h2 className="hover:cursor-pointer hover:underline">Few brands market to women</h2>
                <p className="text-xs">2h ago • 1,403 readers</p>
                <h2 className="hover:cursor-pointer hover:underline">AI firms feel funding pinch</h2>
                <p className="text-xs">2h ago • 1,403 readers</p>
                <h2 className="hover:cursor-pointer hover:underline">Hard Rock Cafes to stay open</h2>
                <p className="text-xs">2h ago • 1,403 readers</p>

                <div className="mt-5">
                    <p className="font-bold opacity-75">Today’s puzzle games</p>
                    <div className="m-3 p-3 flex gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/993/993686.png" alt="" className="w-7 h-7"/>
                        <p className="text-xl opacity-75 hover:cursor-pointer hover:underline">zip #3</p>
                    </div>
                    <div className="m-3 p-3 flex gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/10595/10595686.png" alt="" className="w-7 h-7"/>
                        <p className="text-xl opacity-75 hover:cursor-pointer hover:underline">Mini Soduko #8</p>
                    </div>
                    <div className="m-3 p-3 flex gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/18447/18447026.png" alt="" className="w-7 h-7"/>
                        <p className="text-xl opacity-75 hover:cursor-pointer hover:underline">Tango #7</p>
                    </div>
                    <div className="m-3 p-3 flex gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/1626/1626879.png" alt="" className="w-7 h-7"/>
                        <p className="text-xl opacity-75  hover:cursor-pointer hover:underline">Chess #1</p>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Home
