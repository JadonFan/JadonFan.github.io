import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School, Work, Android, Web } from '@material-ui/icons';

/**
 * Contains the information regarding my work experience
 * @extends Component
 * @author Jadon 
 */
class Milestones extends Component {
	createTimelineEvent(milestone) {
		const timelineEventClazz = milestone["isWork"] ? "vertical-timeline-element--work" :  "vertical-timeline-element--education"; 
		const icon = milestone["isWork"] ? <Work /> : <School />;
		return (
					<VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date={milestone["date"]} icon={icon}>
						<h1 className={timelineEventClazz}> {milestone["title"]} </h1>
						<h2 style={{color: 'white'}}> {milestone["subtitle"]} </h2>
						{ milestone["texts"].map(element => <p style={{fontSize: '1.5rem'}}>{element}</p>) }
					</VerticalTimelineElement>
				);
	}

	render() {
		return (
			<div id="msbody">
				<VerticalTimeline>
					<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="January - April 2020" icon={<Work />}>
						<h1 className="vertical-timeline-element-title"> Full Stack Web Developer </h1>
						<h2 style={{color: 'white'}}> FundThrough </h2>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="January - April 2020" icon={<School />}>
						<h1 className="vertical-timeline-element-title"> 3A Computer Engineering </h1>
						<h2 style={{color: 'white'}}> Past the half-way point </h2>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="September - December 2019" icon={<Work />}>
						<h1 className="vertical-timeline-element-title"> Software Developer (Mobile) </h1>
						<h2 style={{color: 'white'}}> 360 Education Labs (YuJa) </h2>
						<p style={{fontSize: '1.5rem'}}>
							The company is involved in the education business, and its software focuses on lecture and training videos. Teachers can capture, 
							upload and/or edit videos -- either pre-recorded or live -- on the company's website, desktop app or through one of the mobile apps 
							(iOS and Android). Teachers can then also embed quizzes and annotations with the videos. Closed captioning can either be uploaded manually
							with the videos, or can be generated automatically by a voice parsing algorithm. Students can then watch or share these videos, complete
							the quizzes and add their own annotations/notes.
						</p>
						<p style={{fontSize: '1.5rem'}}>
							As an Android developer, I was responsible for implementing/improving some core features on the app, including, but not limited to,
							a media downloader, different playback settings and video recording where frame rates and resolutions can vary. I also helped revamped
							the UI, as we moved to a more clean and material-like UI, and migrated some code to use more recent Android libraries, particularly
							those included in Android Jetpack. The app development involved the use of many common Android libraries, such as Dagger, 
							LiveData, Picasso, RxJava and Room.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="May - August 2019" icon={<School />}>
						<h1 className="vertical-timeline-element-title"> 2B Computer Engineering </h1>
						<h2 style={{color: 'white'}}> Labs, labs, labs... </h2>
						<p style={{fontSize: '1.5rem'}}>
							Time flies by quickly. After the next co-op term, I'll be half way through the ECE program. 
							I still have no regret about choosing ECE as both my hardware and software courses so far have been exciting and interesting. With most 
							of the foundational courses cleared up, I do expect that the courses from here on out will be more practical, so I will be able to 
							better see how what I have learnt so far can be applied to real-life situations. 
						</p>
						<p style={{fontSize: '1.5rem'}}>
							As for the 2B term itself, the content was not particularly difficult. The labs were time-consuming, so the lab rooms in the Engineering
							buildings felt like a second home to me, especially on weekend afternoons! However, they were rewarding; for example, I spent 12 hours on 
							a multithreaded web crawler for one of the ECE252 labs (Systems Programming and Concurrency) and just stared in awe over how I was able
							to apply a wide range of multithreading techniques, such as barriers, to crawl through many nested web pages so quickly!
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="Feburary 2019" icon={<Web />}>
						<h1 className="vertical-timeline-element-title"> Personal Website Launch </h1>
						<h2 style={{color: 'white'}}> Found my way onto the <strike>dark</strike> web </h2>
						<p style={{fontSize: '1.5rem'}}>
							I have launched my personal website -- well, it's this website. I initially developed the website in vanilla JS. However, I soon afterwards found myself
							converting the website into a React-based site and adding some eye-catching custom-made animations. It was that point that
							I realized the beauty of React's component modularization, component states and lifecycles as they improved the readability of the source code, 
							increased the scalability of the website and eased the process of performing unit tests.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="January - April 2019" icon={<Work />}>
						<h1 className="vertical-timeline-element-title"> Software Developer </h1>
						<h2 style={{color: 'white'}}> Telus Health </h2>
						<p style={{fontSize: '1.5rem'}}>
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="September - December 2018" icon={<School />}>
						<h1 className="vertical-timeline-element-title"> 2A Computer Engineering </h1>
						<h2 style={{color: 'white'}}> No time to procrastinate! </h2>
						<p style={{fontSize: '1.5rem'}}>
							It appears that I survived the infamous 2A ECE term. With 6 courses, I essentially spent half of my day every weekday of the week on campus in a lecture, tutorial
							or lab... and that's on top of completing assignments, working on side projects, and preparing for co-op interviews. All in all, relaxation was mostly 
							a weekend thing. Unfortunately, I only realized the great extent of my procrastination after midterm week, which saw my marks dip significantly from first
							year. Thankfully, I eventually caught up with the content after the midterm after promising myself to not leave the problem sets until final exam period.
							As a result, the final exams were able to save my grades.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="May - August 2018" icon={<Work />}>
						<h1 className="vertical-timeline-element-title"> Co-op </h1>
						<h2 style={{color: 'white'}}> Co-op </h2>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="March 2018" icon={<Android />}>
						<h1 className="vertical-timeline-element-title"> Tic-Tac-Toe App Launch </h1>
						<h2 style={{color: 'white'}}> Android development, here I come! </h2>
						<p style={{fontSize: '1.5rem'}}>
							With my first major side project -- where I self-taught a new programming language (Java) and libraries (Android SDK libraries) --
							complete, I was finally able to launch my Tic-Tac-Toe Android app onto the Google Play Store. Setting up a developer account and
							publishing the app through the Play Console were a breeze. Overall, this project not only helped learn a lot of the basics of 
							Android development but also significantly boosted my confidence in my programming skills especially since I was not able to obtain
							any ranks in the main round of co-op applications (even though I do acknowledge the fact that it is my first co-op job search).
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="January - April 2018" icon={<School />}>
						<h1 className="vertical-timeline-element-title"> 1B Computer Engineering </h1>
						<h2 style={{color: 'white'}}> Do you even ECE? </h2>
						<p style={{fontSize: '1.5rem'}}>
							The previous study term was more of a general engineering term. On the other hand, with mathematics (both discrete and continuous), circuits, digital logic 
							and E&amp;M courses all bundled into 1B, this term has clearly established itself as a more ECE-specific foundational term. I have so many opinions regarding
							each course, but I doubt anyone would want to hear my rants, so I'm going to summarize my opinions. I put in the most effort into circuits and felt it was easy 
							after doing so many problem sets. This effort paid off as I scored 100% in that course. Meanwhile, digital logic was difficult even after completing the problem sets
							since it required covered tons of content so quickly and a lot more memorization and out-of-the-box critical thinking. However, the course made me approach 
							problems with a more "hardware" mindset; for example, breaking down problems into state machines, with the consideration of transitions and assignments across various 
							clock cycles. The difficulty of all of the other courses would somewhere between the two aforementioned courses, but they were about equally as useful to me. 
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#3985DB', color: '#FFF' }}
    						     contentArrowStyle={{ borderRight: '7px solid  #3985DB' }}
								 iconStyle={{ background: '#3985DB', color: '#FFF' }} date="September - December 2017" icon={<School />}>
						<h1 className="vertical-timeline-element-title"> 1A Computer Engineering </h1>
						<h2 style={{color: 'white'}}> The beginning of a new age </h2>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
			);
	}
}

export default Milestones;