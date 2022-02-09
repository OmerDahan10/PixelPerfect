export function SuccessStories (){
    return(
        <div className="succes-stories">
          <p className="stories-header">
          Delivering real results for top <br />
           companies. Some of our <span> success stories.</span>
          </p>
           <div className="stories">
              <div className="story">
                 <img className='quoute' src={require('../img/quoute.png')} />
                 <p>
                 “The team perfectly fit the specialized skill set <br />
                  required. They focused on the most essential <br />
                   features helping us launch the platform eight <br />
                    months faster than planned.”
                 </p>

                 <div className='person'>
                     <span className='story-name'>Kady Baker</span>
                     <span className='details'>Product Manager at Bookmark</span>
                 </div>
                 <img src={require('../img/story1.png')} />
              </div>
              <div className="story">
                 <img className='quoute' src={require('../img/quoute.png')} />
                 <p>
                 “We needed to automate our entire onboarding <br />
                  process. The team came in and built out the <br />
                  whole journey. Since going live, user retention has <br />
                  gone through the roof!”
                 </p>

                 <div className='person'>
                     <span className='story-name'>Aiysha Reese</span>
                     <span className='details'>Founder of Manage</span>
                 </div>
                 <img src={require('../img/story2.png')} />
              </div>
              <div className="story">
                 <img className='quoute' src={require('../img/quoute.png')} />
                 <p>
                 “Amazing. Our team helped us build an app that <br />
                  delivered a new experience for hiring a physio. <br />
                  The launch was an instant success with 100k <br />
                  downloads in the first month.”
                 </p>

                 <div className='person'>
                     <span className='story-name'>Arthur Clarke</span>
                     <span className='details'>Co-founder of MyPhysio</span>
                 </div>
                 <img src={require('../img/story3.png')} />
              </div>
           </div>

        </div>
    )
}