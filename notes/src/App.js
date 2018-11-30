import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList.js';
import styled from 'styled-components';
import SideBar from './components/SideBar.js';

const PageWrapper = styled.div`
	height: 100vh;
	min-width: 100%;
	display: flex;
	padding-bottom: 100%;
`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: [
				{
					tags: ['react', 'redux'],
					title: 'React-Redux',
					textBody:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
				},

				{
					tags: ['redux'],
					title: 'REDUX IS THE BEST',
					textBody:
						'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
				},
				{
					tags: ['react', 'react-router'],
					title: 'Get Your Kicks on Route /66',
					textBody:
						'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
				},
				{
					tags: ['redux', 'react', 'smurfs'],
					title: 'Why So Many Projects With Smurfs?',
					textBody:
						'The Smurfs was first created and introduced as a series of comic characters by the Belgian comics artist Peyo (the pen name of Pierre Culliford) in 1958, wherein they were known as Les Schtroumpfs.'
				},
				{
					tags: ['redux', 'react'],
					title: 'Infinite State Management of the Gods',
					textBody:
						"We weren't being pompous ... We did come from the land of the ice and snow. We were guests of the Icelandic Government on a cultural mission. We were invited to play a concert in Reykjavik and the day before we arrived all the civil servants went on strike and the gig was going to be cancelled. The university prepared a concert hall for us and it was phenomenal. The response from the kids was remarkable and we had a great time. 'Immigrant Song' was about that trip and it was the opening track on the album that was intended to be incredibly different"
				},
				{
					tags: ['react', 'redux'],
					title: 'Welcome to a SHORT post',
					textBody: 'This post is less than 100 chars'
				},
				{
					tags: ['smurfs', 'react-router'],
					title: 'Welcome to a LONG post',
					textBody: `They must be delivered safely or other star systems will suffer the same fate as Alderaan. Your destiny lies along a different path than mine. The Force will be with you...always! Boy you said it, Chewie. Where did you dig up that old fossil? Ben is a great man. Yeah, great at getting us into trouble. I didn't hear you give any ideas... Well, anything would be better than just hanging around waiting for him to pick us up... Who do you think... 
Well, if there's a bright center to the universe, you're on the planet that it's farthest from. I see, sir. Uh, you can call me Luke. I see, sir Luke. Just Luke. And I am See-Threepio, human-cyborg relations, and this is my counterpart, Artoo-Detoo. Hello. You got a lot of carbon scoring here. It looks like you boys have seen a lot of action. With all we've been through, sometimes I'm amazed we're in as good condition as we are, what with the Rebellion and all. You know of the Rebellion against the Empire? That's how we came to be in your service, if you take my meaning, sir.
Where could they be? Close the blast doors! Open the blast doors! Open the blast doors! I've been waiting for you, Obi-Wan. We meet again, at last. The circle is now complete. When I left you, I was but the learner, now I am the master. Only a master of evil, Darth. Your powers are weak, old man. You can't win, Darth. If you strike me down, I shall become more powerful than you can possibly imagine.
What a piece of junk. She'll make point five beyond the speed of light. She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard we'll get out of here. Hello, sir. Which way? All right, men. Load your weapons! Stop that ship! Blast 'em! Chewie, get us out of here! Oh, my. I'd forgotten how much I hate space travel.
Run, Luke! Run!`
				},
				{
					tags: ['redux'],
					title: 'The Power of Redux',
					textBody: `This facility is crude, but it should be adequate to freeze Skywalker for his journey to the Emperor. Lord Vader, ship approaching. X-wing class. Good. Monitor Skywalker and allow him to land. Lord Vader, we only use this facility for carbon freezing. If you put him in there, it might kill him. I do not want the Emperor's prize damaged. We will test it...on Captain Solo.
You are beaten. It is useless to resist. Don't let yourself be destroyed as Obi-Wan did. There is no escape. Don't make me destroy you. You do not yet realize your importance. You have only begun to discover you power. Join me and I will complete your training. With our combined strength, we can end this destructive conflict and bring order to the galaxy. I'll never join you! If you only knew the power of the dark side. Obi-Wan never told you what happened to your father. He told me enough! He told me you killed him. No. I am your father. No. No. That's not true! That's impossible! Search your feelings. You know it to be true. No! No! No! Luke. You can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and we can rule the galaxy as father and son. Come with me. It's the only way.
Look, I'm sure it's delicious. I just don't understand why we can't see Yoda now. Patience! For the Jedi it is time to eat as well. Eat, eat. Hot. Good food, hm? Good, hmm? How far away is Yoda? Will it take us long to get there? Not far. Yoda not far. Patience. Soon you will be with him. Rootleaf, I cook. Why wish you become Jedi? Hm? Mostly because of my father, I guess. Ah, your father. Powerful Jedi was he, powerful Jedi, mmm. 
Noisy brute. Why don't we just go into light-speed? We can't? How would you know the hyperdrive is deactivated? The city's central computer told you? Artoo-Detoo, you know better than to trust a strange computer. Ouch! Pay attention to what you're doing!
Put Captain Solo in the cargo hold. Artoo! Artoo! Where have you been? Turn around, you wooly...! Hurry, hurry! We're trying to save Han from the bounty hunter! Well, at least your still in one piece! Look what happened to me! Oh, no! Chewie, they're behind you!`
				},
				{
					tags: [''],
					title: `This post won't last long`,
					textBody:
						'fasdlj sad fjl;kj sad l;jkfsad l;kj sd;alkgjll aid ansdf iasdg askdjf oaisdug kjasd fia sdgkjasdf;iu asdgjl gsdajklasdfjkl;'
				}
			]
		};
	}

	render() {
		return (
			<div>
				<header />
				<PageWrapper>
					<SideBar />
					<NotesList notes={this.state.notes} />
				</PageWrapper>
			</div>
		);
	}
}

export default App;
