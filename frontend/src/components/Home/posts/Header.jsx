function Header({user, date}) {
  const DateNow = new Date()
  let dateDiff =( DateNow -  new Date(date))/1000
  let timePosted = ''
  console.log(user)

  if (Math.floor(dateDiff) < 60) {
    timePosted = Math.floor(dateDiff) + " 's";
  } else if (Math.floor(dateDiff / 60) < 60) {
    timePosted = Math.floor(dateDiff / 60) + " min";
  } else if (Math.floor(dateDiff / 60 / 60) < 24) {
    timePosted = Math.floor(dateDiff / 60 / 60) + " hour";
  } else if (Math.floor(dateDiff / 60 / 60 / 24) < 4) {
    timePosted = Math.floor(dateDiff / 60 / 60 / 24) + " day";
  } else if (Math.floor(dateDiff / 60 / 60 / 24 / 4) < 4) {
    timePosted = Math.floor(dateDiff / 60 / 60 / 24 / 4) + " week";
  } else if (Math.floor(dateDiff / 60 / 60 / 24 / 4) < 12) {
    timePosted = Math.floor(dateDiff / 60 / 60 / 24 / 4) + " month";
  } else {
    timePosted = Math.floor(dateDiff / 60 / 60 / 24 / 4 / 12) + " year";
  }
  if(timePosted > 1){
    timePosted +='s'
  }
  return (
    <div className="w-full flex items-center">
        <div className="rounded-full w-10 h-10 bg-red-50 bg-cover" style={{backgroundImage :`url(./images/users/${user?.image})`}}></div> 
        <div className="ml-4">
          <span className=" font-medium block">{user?.firstName + " " + user?.lastName}</span>
            <span className="opacity-70  text-sm">
              {date && (
                timePosted + " ago"
              )
              
              }
            </span>
        </div>
    </div>
  )
}

export default Header