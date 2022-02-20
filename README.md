# StormHacks2022
# Inspiration
Recently I (Christine), broke my stylus and had to transition over to traditional note taking. As someone, who has gotten very annoyed at having to go back and forth between my old digital notes and my new written notes, I wanted a way to solve this issue. This is where NoteShelf came in.

# What it does
NoteShelf takes uploaded images of written notes and transcribes them into a digital format. These notes are editable, so if you see any errors in the translation, you can also go back and fix them.

# How we built it
NoteShelf was made using React, Firebase and Google Cloud Vision api. With the app, user's can upload their image, which is sent to Firebase to be stored and then sent again to Cloud Vision to be processed. Once it has been transcribed, the transcribed text is then outputted for editing and viewing.

# Challenges we ran into
As first year students, there was a lot we had to learn. The first challenge was working with Firebase and figuring out how to store the data. Then we had to figure out how to fetch the data and have it sent to be read over by Firebase. All of this was magnified by our relative inexperience working with back and front-end, so there was just an overall steep learning curve. Because of this, we had little time to work on the front-end of the app, so there's a bit of a difference from what it was supposed to look like in the mock-up.

# Accomplishments that we're proud of
We're happy to have made a working end product at the end of the day. This is our first time submitting something that isn't just a Figma mock-up, so we are proud of that!

# What we learned
We learned how to use Google Firebase and Cloud Vision api, as well as had the opportunity to play around with React as a framework. Working with databases and fetching was a struggle, but we are happy it worked out in the end.

# What's next for NoteShelf
We plan to add other functions, such as integrating lecture videos, audio mp3's and other forms of notes teachers might provide. As well, we plan on bettering the AI so it can better read text and reduce the amount of errors in the transcript.
