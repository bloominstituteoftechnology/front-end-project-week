import { DELETE_NOTE, EDIT_NOTE, CREATE_NOTE } from '../actions';


/* quotes taken from : http://socialgoodipsum.com */
/* UUID generated from  : https://codepen.io/User55/pen/MBewGQ */
/* Epoch Timestamp from  : https://codepen.io/User55/pen/oMLjxX */

const initialState = [
    {
        _id: 'b8d64594-535b-8975-1f5e-5143b6c8ffe3',
        title: '1: green outcomes',
    body: 'Inspire equal opportunity resist; green space outcomes. Entrepreneur B-corp resist, or global social impact. Save the world shared vocabulary social innovation greenwashing fairness society. Contextualize, commitment collective impact effective altruism best practices. Academic, collective impact ecosystem shared value society. Scalable ecosystem, synergy game-changer silo. Replicable, deep dive boots on the ground then; policymaker human-centered shared unit of analysis inspire justice. But; human-centered, then granular ecosystem co-create scale and impact. Social entrepreneur, social impact emerging collaborative cities changemaker incubator human-centered. Low-hanging fruit, vibrant entrepreneur; dynamic efficient disrupt strategy, policymaker corporate social responsibility. The resistance program areas inspirational impact triple bottom line external partners. Support storytelling changemaker milestones white paper. Circular collective impact and, the resistance we must stand up impact investing green space. Social innovation, inspirational and storytelling data. Inspire thought partnership state of play impact investing problem-solvers effective rubric. Preliminary thinking social intrapreneurship, communities; program area best practices relief. Innovation,.',
        createdAt: 1531837428120,
    },
    {
        _id: '39d25ca7-f004-bb01-0cfd-3a0828477e61',
        title: '2: Silo overcome',
        body: 'Silo overcome injustice ideate fairness parse, innovation accessibility. Capacity building milestones problem-solvers resilient benefit corporation. Transparent resilient, collective impact bandwidth NGO initiative social capital indicators social entrepreneur. To cultivate; venture philanthropy; activate best practices. Thought leader social entrepreneur parse, corporate social responsibility but effective think tank. Impact investing social intrapreneurship social enterprise empathetic invest disrupt peaceful. Correlation movements program areas mobilize citizen-centered design thinking. Radical, improve the world move the needle segmentation social entrepreneurship social intrapreneurship. Rubric changemaker segmentation venture philanthropy state of play. Empathetic framework the resistance mass incarceration B-corp collaborative cities changemaker to. Youth natural resources uplift social intrapreneurship bandwidth, change-makers correlation uplift systems thinking. Improve the world, challenges and opportunities catalyze parse social return on investment. Program area gender rights optimism ideate commitment philanthropy targeted citizen-centered changemaker. Correlation, shared value; blended value innovate dynamic. Sustainable social impact empower the resistance then grit. Initiative, mobilize agile, policymaker equal.',
        createdAt: 1531837428220,
    },
    {
        _id: '2a1ee8a3-01a0-3578-fb22-db59c812b6f3',
        title: '3: think tank',
        body: 'Our work scalable, collaborate outcomes think tank synergy. Challenges and opportunities human-centered venture philanthropy radical entrepreneur, effective altruism co-create green space empower. Empower communities co-create, innovation, segmentation rubric, contextualize humanitarian impact investing. Grit, program area catalyze circular big data inclusive. Shared value communities silo, effective altruism catalyze social impact B-corp circular. External partners commitment living a fully ethical life social capital humanitarian indicators. Revolutionary, social intrapreneurship, progress empower, segmentation inspiring white paper blended value. Rubric do-gooder segmentation grit scalable, incubator, empower communities problem-solvers. External partners compassion accessibility humanitarian, collaborative consumption transparent thought provoking program area thought leader. Collaborative consumption synergy thought leadership incubator collective impact. Strengthening infrastructure inclusion; replicable, uplift outcomes. Venture philanthropy; when global social capital agile. Incubator scale and impact; social entrepreneurship innovate ecosystem. Gender rights external partners; relief philanthropy youth collective impact. Mobilize social innovation inspire mass incarceration do-gooder ecosystem optimism. A, agile collaborate; collaborative cities, strengthening.',
        createdAt: 1531837428320,
    },
    {
        _id: 'e93ea9d4-0bfa-5f29-f6e8-90a00055e63e',
        title: '4: mental picture',
        body: 'Inspire compassion co-create social return on investment revolutionary thought leader mobilize scale and impact. Human-centered compelling the resistance or, social entrepreneur blended value. Humanitarian game-changer paradigm, communities indicators co-create. Leverage natural resources; agile outcomes peaceful replicable. Revolutionary, leverage, commitment thought leader engaging empathetic movements empower communities. Invest we must stand up bandwidth empower communities efficient cultivate. Collaborate contextualize; paradigm replicable philanthropy, technology initiative. Framework, disrupt, collaborative cities low-hanging fruit philanthropy, invest; social capital and peaceful. Circular, boots on the ground; we must stand up philanthropy innovate entrepreneur social return on investment. Because, collaborate social capital dynamic LGBTQ+ inclusion disrupt shared value uplift. Deep dive collaborative cities compassion, human-centered compelling social entrepreneurship. Fairness do-gooder ecosystem, social innovation changemaker her body her rights. Inspiring, peaceful citizen-centered; incubator efficient, deep dive change-makers social innovation. Impact; inspirational disrupt justice scale and impact. Our work shared value; the resistance collaborative cities commitment. Support empower strategize.',
        createdAt: 1531837428420,
    },
        {
        _id: '55ca107d-8fca-b2eb-ce4d-1a6da7974a7c',
        title: '5: green outcomes',
    body: 'Inspire equal opportunity resist; green space outcomes. Entrepreneur B-corp resist, or global social impact. Save the world shared vocabulary social innovation greenwashing fairness society. Contextualize, commitment collective impact effective altruism best practices. Academic, collective impact ecosystem shared value society. Scalable ecosystem, synergy game-changer silo. Replicable, deep dive boots on the ground then; policymaker human-centered shared unit of analysis inspire justice. But; human-centered, then granular ecosystem co-create scale and impact. Social entrepreneur, social impact emerging collaborative cities changemaker incubator human-centered. Low-hanging fruit, vibrant entrepreneur; dynamic efficient disrupt strategy, policymaker corporate social responsibility. The resistance program areas inspirational impact triple bottom line external partners. Support storytelling changemaker milestones white paper. Circular collective impact and, the resistance we must stand up impact investing green space. Social innovation, inspirational and storytelling data. Inspire thought partnership state of play impact investing problem-solvers effective rubric. Preliminary thinking social intrapreneurship, communities; program area best practices relief. Innovation,.',
        createdAt: 1531837428520,
    },
    {
        _id: 'a5d2b87f-4b1d-0171-e050-28f8b8d72823',
        title: '6: Silo overcome',
        body: 'Silo overcome injustice ideate fairness parse, innovation accessibility. Capacity building milestones problem-solvers resilient benefit corporation. Transparent resilient, collective impact bandwidth NGO initiative social capital indicators social entrepreneur. To cultivate; venture philanthropy; activate best practices. Thought leader social entrepreneur parse, corporate social responsibility but effective think tank. Impact investing social intrapreneurship social enterprise empathetic invest disrupt peaceful. Correlation movements program areas mobilize citizen-centered design thinking. Radical, improve the world move the needle segmentation social entrepreneurship social intrapreneurship. Rubric changemaker segmentation venture philanthropy state of play. Empathetic framework the resistance mass incarceration B-corp collaborative cities changemaker to. Youth natural resources uplift social intrapreneurship bandwidth, change-makers correlation uplift systems thinking. Improve the world, challenges and opportunities catalyze parse social return on investment. Program area gender rights optimism ideate commitment philanthropy targeted citizen-centered changemaker. Correlation, shared value; blended value innovate dynamic. Sustainable social impact empower the resistance then grit. Initiative, mobilize agile, policymaker equal.',
        createdAt: 1531837428620,
    },
    {
        _id: 'c99827cd-0be0-92b3-dd9d-0d11ae62a387',
        title: '7: think tank',
        body: 'Our work scalable, collaborate outcomes think tank synergy. Challenges and opportunities human-centered venture philanthropy radical entrepreneur, effective altruism co-create green space empower. Empower communities co-create, innovation, segmentation rubric, contextualize humanitarian impact investing. Grit, program area catalyze circular big data inclusive. Shared value communities silo, effective altruism catalyze social impact B-corp circular. External partners commitment living a fully ethical life social capital humanitarian indicators. Revolutionary, social intrapreneurship, progress empower, segmentation inspiring white paper blended value. Rubric do-gooder segmentation grit scalable, incubator, empower communities problem-solvers. External partners compassion accessibility humanitarian, collaborative consumption transparent thought provoking program area thought leader. Collaborative consumption synergy thought leadership incubator collective impact. Strengthening infrastructure inclusion; replicable, uplift outcomes. Venture philanthropy; when global social capital agile. Incubator scale and impact; social entrepreneurship innovate ecosystem. Gender rights external partners; relief philanthropy youth collective impact. Mobilize social innovation inspire mass incarceration do-gooder ecosystem optimism. A, agile collaborate; collaborative cities, strengthening.',
        createdAt: 1531837428720,
    },
    {
        _id: 'ace46ae7-349e-85e0-e94f-2a45b79681e4',
        title: '8: social return',
        body: 'Inspire compassion co-create social return on investment revolutionary thought leader mobilize scale and impact. Human-centered compelling the resistance or, social entrepreneur blended value. Humanitarian game-changer paradigm, communities indicators co-create. Leverage natural resources; agile outcomes peaceful replicable. Revolutionary, leverage, commitment thought leader engaging empathetic movements empower communities. Invest we must stand up bandwidth empower communities efficient cultivate. Collaborate contextualize; paradigm replicable philanthropy, technology initiative. Framework, disrupt, collaborative cities low-hanging fruit philanthropy, invest; social capital and peaceful. Circular, boots on the ground; we must stand up philanthropy innovate entrepreneur social return on investment. Because, collaborate social capital dynamic LGBTQ+ inclusion disrupt shared value uplift. Deep dive collaborative cities compassion, human-centered compelling social entrepreneurship. Fairness do-gooder ecosystem, social innovation changemaker her body her rights. Inspiring, peaceful citizen-centered; incubator efficient, deep dive change-makers social innovation. Impact; inspirational disrupt justice scale and impact. Our work shared value; the resistance collaborative cities commitment. Support empower strategize.',
        createdAt: 1531837428820,
    },
        {
        _id: 'ffbd9945-0f8a-7525-e23f-2bc19c21df0d',
        title: '9: moral compass',
        body: 'Inspire compassion co-create social return on investment revolutionary thought leader mobilize scale and impact. Human-centered compelling the resistance or, social entrepreneur blended value. Humanitarian game-changer paradigm, communities indicators co-create. Leverage natural resources; agile outcomes peaceful replicable. Revolutionary, leverage, commitment thought leader engaging empathetic movements empower communities. Invest we must stand up bandwidth empower communities efficient cultivate. Collaborate contextualize; paradigm replicable philanthropy, technology initiative. Framework, disrupt, collaborative cities low-hanging fruit philanthropy, invest; social capital and peaceful. Circular, boots on the ground; we must stand up philanthropy innovate entrepreneur social return on investment. Because, collaborate social capital dynamic LGBTQ+ inclusion disrupt shared value uplift. Deep dive collaborative cities compassion, human-centered compelling social entrepreneurship. Fairness do-gooder ecosystem, social innovation changemaker her body her rights. Inspiring, peaceful citizen-centered; incubator efficient, deep dive change-makers social innovation. Impact; inspirational disrupt justice scale and impact. Our work shared value; the resistance collaborative cities commitment. Support empower strategize.',
        createdAt: 1531837428920,
    }

];

const notesReducer = (state = initialState, action) => {
    let temp = Array.from(state);
    switch (action.type) {
        case DELETE_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload) {
                    temp.splice(index, 1);
                    return;
                }
            });
            return temp;
        case EDIT_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload._id) {
                    temp.splice(index, 1);
                    return;
                }
            });
            temp.push(action.payload);
            return temp;
        case CREATE_NOTE:
            temp.push(action.payload);
            return temp;
        default:
            return state;
    }
}

export default notesReducer;