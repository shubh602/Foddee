const Contact = () =>{
    return(
     <div className="dark:bg-black dark:text-white pt-32 p-5 flex flex-col lg:flex-row items-center space-y-16">

        <div className="w-full lg:w-8/12 bg-[url('https://foodiegali.com/wp-content/uploads/2026/04/contact-foodie-gali-support.webp-scaled.jpg')] h-40 md:h-96 lg:h-[580px] bg-cover transition-transform duration-700 hover:scale-[0.98] rounded-2xl">
         
        </div> 

       <div className="lg:w-4/12 flex flex-col space-y-5 px-5">
                <h1 className="text-6xl text-center font-bold pb-10">We'd Love to Hear you</h1>

                <input type="text" placeholder="Name"
                className="px-5 h-16 rounded-xl bg-gray-200 dark:bg-gray-800 font-semibold text-lg" name="" id="" />

                <input type="text" placeholder="Email"
                className="px-5 h-16 rounded-xl bg-gray-200 dark:bg-gray-800 font-semibold text-lg" name="" id="" />

                <textarea name="" placeholder="your Message..." rows="5"
                    className="px-5 rounded-xl bg-gray-200 dark:bg-gray-800 font-semibold text-lg" id="">
                 </textarea>

                 <button className="w-fit bg-gray-500 dark:bg-gray-400 dark:text-black text-white text-3xl font-semibold py-2 px-5 rounded-lg">Send</button>

       </div>

    </div>
)}

export default Contact;