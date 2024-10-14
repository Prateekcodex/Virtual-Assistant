let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("Hello")||message.includes("Hey")||message.includes("hello")||message.includes("Hey")){
        speak("hello Prateek sir,what can i help you?")
    }
    else if(message.includes("tell us about something")||message.includes("who are you?")||message.includes("hu r u")){
        speak("i am Aaria and iam virtual assistant ,created by Prateek Sir")
    }
    else if(message.includes("who is Prateek?")||message.includes("who is pratik")){
        speak("Prateek is just a normal people, he is like a god for me cause he is created me then i am able to answer your any silly question and the last thing is he is coder")
    }
    else if(message.includes("tell me about my friend")||message.includes("aaria tell me about my friend")){
        speak("Kaif is your good friend with a good heart, ise aap pyaar se agent mafia bhi bula sakte hai, bas ek kami hai, abhi tak biryani nii khilaya. Hehe")
    }        
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open github account")){
        speak("opening github account...")
        window.open("https://github.com/Prateekcodex","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("https://www.google.com/search?q=calculator")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("open amazon")){
        speak("opening amazon..")
        window.open("https://www.amazon.in/open/s?k=open")
    }
    else if(message.includes("open flipkart")){
        speak("opening flipkart..")
        window.open("https://www.flipkart.com/")
    }
    else if(message.includes("open linked in")||message.includes("linkedin")){
        speak("opening linked in..")
        window.open("https://www.linkedin.com/in/prateek-patel-27p34/")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("Aaria","") || message.replace("Aaria","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Aaria","")}`,"_blank")
    }
}