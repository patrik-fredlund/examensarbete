import React from 'react';

//styles
import { Wrapper } from '../styles/GlobalStyles';
import { UxProject } from '../styles/UxProjectStyles';

//This is the Freshkeeper project page. It's where I show the UX process of a school assignment. It's pretty much hardcoded content in order to show the whole UX process
export const FreshkeeperProject = () => {
  return (
    <Wrapper>
      <UxProject>
        <div className='headerWrapper'>
          <div className='headerProjectContainer'>
            <a href='./Work2'>Back</a>

            <h1 className='headerTitle'>Freshkeeper</h1>
            <p className='explainerText'>
              Freshkeeper is an App that helps you keep track on your food items
              and their expiration date. This was a school assignement with
              focus on the ux process, from research and discovery to definition
              and final prototype.
            </p>
          </div>
        </div>
      </UxProject>

      <UxProject>
        <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>Project brief</h1>
            <h3>Sustainable food consumption</h3>
            <p>
              More and more people are beginning to realize the importance of
              developing more sustainable services and functions that do not
              deplete ecosystem resources. Identify a problem with food
              consumption that you want to explore further and that you would
              like to solve in some way.
            </p>
            <h3>Assignment description</h3>
            <p>
              Develop a solution proposal in the form of a clickable prototype.
              The proposal must be rooted in business goals and user needs of
              the main target group. The prototype will primarily be used on
              mobile phones. The prototype should cover the main flow from start
              to finish.
            </p>
          </div>
        </div>

        <h1 className='projectTitle'>Discover</h1>
        <hr />
        <p className='subHeader'>Part 1 - Explore Ideas</p>
        <p className='ingressParagraph'>
          The first part of the discovery research was to choose a problem to
          solve with food consumption. I decided to focus on <b>food waste </b>{' '}
          because according to the Swedish National Food Administration:
        </p>
        <div className='uxProjectWrapperYellow'>
          <div className='uxProjectContainer'>
            <p className='posItText'>
              Approximately 19 kilos of edible food are thrown in the rubbish
              and 26 kilos of food and drink are poured into the bin. The
              figures apply per person and year.{' '}
              <span className='bold'>
                Much of the food is thrown away because it is not eaten in time.
              </span>
            </p>
          </div>
        </div>
        <p className='MiddleIngressParagraph'>
          So after exploring different ideas of how to{' '}
          <b>help the user waste less food </b> I decided to{' '}
          <b>
            create an app that gives the user a reminder when their purchased
            food will soon expire.
          </b>{' '}
          So in other words:
        </p>
        <div className='uxProjectWrapperBlue'>
          <div className='uxProjectContainer'>
            <p className='posItText'>
              We want to make it easier for the user to eat their purchased food
              before it expires, and in this way{' '}
              <span className='bold'>save money</span> and at the same time
              <span className='bold'> protect the environment.</span>
            </p>
          </div>
        </div>
        <p className='subHeader'>The main two features of this app would be:</p>

        <div className='postItContainer'>
          <div className='postItNotes'>
            <h2 className='postItTitle'> Register</h2>
            <p className='postItText'>
              Register the food in the app and put a best-before date on it.
            </p>
          </div>
          <div className='postItNotes'>
            <h2 className='postItTitle'>Reminder </h2>
            <p className='postItText'>
              Get a reminder when the date starts to approach.
            </p>
          </div>
        </div>

        <p className='MiddleIngressParagraph'>
          That's the basic idea of the app and the two main features. With that
          in mind the next step of the discovery was to do a competitor
          analysis.
        </p>
        <hr></hr>
        <div className='competitorsContainer'>
          <p className='subHeader'>
            Part 1.2 - competitor & target group analysis
          </p>
          <h2 className='projectTitle'>competitor analysis</h2>
          <p className='MiddleIngressParagraph'>
            After searching the web for similar apps I found that{' '}
            <span className='bold'>Fridge buddy,</span>
            <span className='bold'> Beep</span> and
            <span className='bold'> Fridgely </span> are the main competitors.{' '}
            <br />
            To learn from them I decided to go directly to their users by
            reading the <span className='bold'>customer reviews</span> of those
            apps. In that way I could get insight in the users{' '}
            <span className='bold'>pains</span> and{' '}
            <span className='bold'>gains</span> when using those apps,{' '}
            <span className='bold'>and use that to my advantage.</span> I would
            also get valuble knowledge of the{' '}
            <span className='bold'>user needs</span> when using an apps like
            this.
            <img
              className='reviews'
              src={require('../Images/reviews.jpg')}
              alt='image of the freshkepper app'
            />
            <p className='imgText'>
              {' '}
              Sample from the user reviews. Useful insights highlighted in red.
            </p>
          </p>
        </div>

        <h2 className='projectSubTitle'>
          Summary of the competitors users pains & gains
        </h2>
        <div className='painGainWrapper'>
          <div className='painGainContainer'>
            <h1>Pains</h1>
            <ul className='painsList'>
              <li>Scanning the expiration date is a hassle.</li>
              <li>Can't share account with others.</li>
              <li>Need better categorization.</li>
              <li>There are no location options</li>
              <li>Tags would be useful</li>
              <li>A Quantity field is required.</li>
              <li>Recipe search does not work properly as it should.</li>
            </ul>
          </div>

          <div className='painGainContainer'>
            <h1>Gains</h1>
            <ul className='painsList'>
              <li>Also has shopping list.</li>
              <li>Can add own storage spaces.</li>
              <li>The interface is simple, smart and fast.</li>
              <h3>Other useful features</h3>
              <li>Can inventory the food supply.</li>
              <li>Can locate where I have specific food items.</li>
            </ul>
          </div>
        </div>

        <h2 className='projectTitle'>Target group analysis</h2>
        <p className='MiddleIngressParagraph'>
          For the target group analysis I choose to do a <b>Survey</b> and{' '}
          <b>interviews.</b>
          Research goals with the Survey was to find out:
        </p>
        <div className='uxProjectWrapperYellow'>
          <div className='uxProjectContainer'>
            <ul className='painsList'>
              <li>Who is the user?</li>
              <li>What age are they?</li>
              <li>What is important for them with an app like this?</li>
              <li>What extra feature would they like?</li>
            </ul>
          </div>
        </div>
        <p className='MiddleIngressParagraph'>
          I'we got alot of interesting feedback from the surrvey. Here are some
          of the insights worth metioning:
        </p>
        <h2 className='projectSubTitle'>Insights</h2>
        <div className='insightsWrapper'>
          <div className='insightsContainer'>
            <h1>Easy to use</h1>
            <p>
              The app needs to have a clean and simple interface and approach.
              Not just because of a smooth user experience, but also because it
              has to do with food, so the UI needs to be clean.
            </p>
          </div>

          <div className='insightsContainer'>
            <h1>Easy to register date</h1>
            <p>
              Scanning a food item don't work well, according to the competitor
              analysis, so it's better to manually register items, but how? This
              is the most important feature of the app so it needs to be easy
              and quick to do.
            </p>
          </div>
          <div className='insightsContainer'>
            <h1>Be able to categorize items</h1>
            <p>
              To more easily find a specific food item in the App and at home.
              Some user might have an extra fridge or storage, so all items are
              not in the same place. That makes this app an inventory of your
              food items, which brings more value to the user.
            </p>
          </div>
        </div>
        <p className='ingressParagraph'>
          That's the discovery part of the analysis with lots of interesting
          information. I feel the outlines of an app is starting to take shape.
          Some of the more interesting insights was e.g that it's not just an
          app to keep track of your foods expiration date, but also an inventory
          space/cloud of your storages. So the features and value of the app is
          expanding because of the research of competitors and target group. Now
          it's time to define these insights and se what they really mean.
        </p>
        <hr />
      </UxProject>
      <UxProject>
        <h1 className='projectTitle'>Define</h1>
        <hr />
        <p className='subHeader'>Part 2.1 - Define the target group</p>
        <p className='ingressParagraph'>
          According to the surrvey the target group is:
        </p>
        <div className='uxProjectWrapperYellow'>
          <div className='uxProjectContainer'>
            <ul className='painsList'>
              <li>18-45 year old environmentally conscious city dwellers</li>
              <li>Healthy</li>
              <li>Educated</li>
              <li>Financially conscious</li>
              <li>Open to test new things</li>
            </ul>
          </div>
        </div>
        <img
          className='canvas'
          src={require('../Images/canvas.png')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'>
          {' '}
          Value proposition canvas of the users pains, gains and needs
        </p>
        <p className='MiddleIngressParagraph'></p>
        <h2 className='projectSubTitle'>
          Summary of the value proposition canvas.
        </h2>
        <div className='insightsWrapper'>
          <div className='insightsContainer'>
            <h1>Pains</h1>
            <ul className='painsList'>
              <li>It's an extra process</li>
              <li>Complicated</li>
              <li>There are similar services, which are troublesome</li>
              <li>Accustomed to another routine</li>
              <li>
                Can create a bad conscience ("damn now I threw food away again")
              </li>
            </ul>
          </div>

          <div className='insightsContainer'>
            <h1>Gains</h1>
            <ul className='painsList'>
              <li> Be able to have several users</li>
              <li>Climate smart</li>
              <li>Saves money</li>
              <li>Inventory assistant</li>
              <li>New and exciting</li>
              <li>Practical</li>
              <li>Dinner planning</li>
              <li>Reduce food waste at home</li>
              <li>Household tips</li>
              <li>Healthy</li>
              <li>Get inspiration for dishes</li>
            </ul>
          </div>
          <div className='insightsContainer'>
            <h1>Needs</h1>
            <ul className='painsList'>
              <li>Simple navigation and design</li>
              <li> Clean navigation and design</li>
              <li>Be able to have several users in one account</li>
              <li>Be able to divide into categories</li>
              <li>Be able to create your own categories</li>
            </ul>
          </div>
        </div>

        <h1 className='projectTitle'>Define features</h1>
        <hr />
        <p className='subHeader'>
          Part 2.2 - Define the functions & features of the App
        </p>

        <p className='ingressParagraph'>
          I'we already decied about the main features of the app:
          <ul className='painsList'>
            <li>Register item and add expiration date</li>
            <li> Get a reminder when the date is close</li>
          </ul>
          From the target group research I also got a lot of useful feedback as
          to what's important to them when using these features. So now it's
          time to develop those features in detail to reach the user needs. From
          the feedback I also learned that the user would value additional
          features of the App. First step is to write down all features in order
          of importance.
        </p>

        <h2 className='projectSubTitle'>
          All functions of the App in order of importance
        </h2>
        <img
          className='functionsImg'
          src={require('../Images/functions1.png')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'>
          {' '}
          Screenshot of the functions of the app in order of importance.
        </p>
        <p className='ingressParagraph'>
          Next step is to focus on the prioritzed features and develop those in
          detail to create the main user flow. I'we decided to write it down,
          like in the screenshot below, as a first step to get a clear view of
          each part.
        </p>
        <h2 className='projectSubTitle'>
          Development of the prioritized functions in detail
        </h2>
        <img
          className='functionsImg'
          src={require('../Images/functions2.png')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'>
          {' '}
          Screenshot of the prioritized functions in detail.
        </p>
        <p className='ingressParagraph'>
          Next step is create a sketch of the main user flow of the prioritized
          functions, to get a sense of the journey and to see if it's working as
          planned.
        </p>
        <h2 className='projectSubTitle'>Main user flow</h2>
        <img
          className='functionsImg'
          src={require('../Images/freshkeeper_userflow.jpg')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'> Screenshot of the main user flow.</p>
        <p className='ingressParagraph'>
          For me it's satisfying to see this value cycle below. It's the idea of
          this app as it is your storage and shoppinglist. So either you have
          the food item at home, or you get a reminder to add it to your
          shopping list.
        </p>
        <h2 className='projectSubTitle'>Cycle of user value simplified</h2>
        <img
          className='functionsImg'
          src={require('../Images/freshkeeper_circle.jpg')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'> Screenshot of cycle of user value</p>
        <p className='ingressParagraph'>
          Next step is to create the final userflow in with all parts. This will
          be the guidline and map for the prototype.
        </p>
        <h2 className='projectSubTitle'>Development of the Userflow</h2>
        <img
          className='functionsImg'
          src={require('../Images/userflow_complete.png')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'> Screenshot of the userflow</p>

        <h1 className='projectTitle'>Name of the App</h1>
        <hr />
        {/*  <p className='subHeader'>Part 2.3 - Define the target group</p> */}
        <p className='ingressParagraph'>
          Now it's time to find a suitable name for the App. I allways loved
          this part in graphic design and branding, and it's no difference with
          UX. I had a brainstorm session and started with writting down words,
          feelings and things that can be assosiated with this subject, to build
          a tree of names and in the end the perfect name will appear and blom,
          so to speak. If it's possible the name needs to tick all the boxes of
          the features of the App. I started with writting down words realted to
          the subject:
        </p>
        <div className='insightsWrapper'>
          <div className='insightsContainer'>
            <h1>If it's a place</h1>
            <ul className='painsList'>
              <li>Stash</li>
              <li>Shelf</li>
              <li>Inventory</li>
              <li>Central</li>
              <li>Hub</li>
              <li>Cloud</li>
              <li>Kitchen</li>
              <li>Platform</li>
              <li>Station</li>
              <li>Space</li>
            </ul>
          </div>

          <div className='insightsContainer'>
            <h1>If it's a person</h1>
            <ul className='painsList'>
              <li>Buddy</li>
              <li>Pal</li>
              <li>Shelback</li>
              <li>Help</li>
              <li>Assistant</li>
              <li>Sous Chef</li>
              <li>Sidekick</li>
              <li>Manager</li>
              <li>Keeper</li>
            </ul>
          </div>

          <div className='insightsContainer'>
            <h1>If it's the value of the App</h1>
            <ul className='painsList'>
              <li>Long last</li>
              <li>Date keeper</li>
              <li>Taste</li>
              <li>Save</li>
              <li>Fresh</li>
              <li>Organize</li>
            </ul>
          </div>
        </div>
        <p className='ingressParagraph'>
          With those words in mind from the brainstorm, next step was to write
          down name suggestions that would apply to the value of the App to
          define what it is. It needs to be simple and straight to the point to
          communicate directly to the target group.
        </p>
        <h2 className='projectSubTitle'>Name workhop</h2>
        <img
          className='functionsImg'
          src={require('../Images/names.png')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'> Screenshot from the name workshop</p>
        <p className='ingressParagraph'>
          From the workhop these four where my favorites. If I had time I would
          at this stage do a user test and ask the user which was their favorite
          name.
        </p>
        <img
          className='functionsImg'
          src={require('../Images/4names.png')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'> Screenshot from the name workshop</p>
        <p className='ingressParagraph'>And the winner is:</p>
        <img
          className='functionsImg'
          src={require('../Images/thename.png')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'> Screenshot from the name workshop</p>
        <hr />
        <h1 className='projectTitle'>Develop</h1>
        <hr />
        <p className='subHeader'>
          Create a prototype of the Apps main userflow
        </p>
        <p className='ingressParagraph'>
          First I made a low-fi sketch of the prototype to get all parts where I
          wanted them, then I created a high-fidelity wireframe/prototype in
          Figma. Here's the final result of the main user flow:
        </p>
        <div className='screeenShotsWrapper'>
          <img
            className='iphone'
            src={require('../Images/iphone_start.png')}
            alt='image of the freshkepper app'
          />{' '}
          <img
            className='iphone'
            src={require('../Images/iphone_login2.png')}
            alt='image of the freshkepper app'
          />
          <img
            className='iphone'
            src={require('../Images/iphone_storage4.png')}
            alt='image of the freshkepper app'
          />
          <img
            className='iphone'
            src={require('../Images/iphone_add3.png')}
            alt='image of the freshkepper app'
          />
          <img
            className='iphone'
            src={require('../Images/iphone_shoppinglist3.png')}
            alt='image of the freshkepper app'
          />
        </div>

        <hr />
        <p className='subHeader'>Graphic Guidelines</p>
        <p className='ingressParagraph'>
          And here are a part of the graphic manual with the choosen fonts and
          colors of the App.
        </p>
        <img
          className='functionsImg'
          src={require('../Images/graphic_guidelines.jpg')}
          alt='image of the freshkepper app'
        />
        <p className='imgText'> Screenshot of the graphic guidelines</p>
        <hr />
        <h1 className='projectTitle'>That's it!</h1>
        <hr />
        <p className='subHeader'>
          Thank you for taking your time to se my work. Please feel free to get
          back to me for some feedback or just to say hi. Have a good day!
        </p>
        <p className='ingressParagraph'></p>
      </UxProject>
    </Wrapper>
  );
};
