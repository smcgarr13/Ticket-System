// Need to change key
const {User,Question} = require('../../models'); 
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const stripeResolver = {
  Query:{

    checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
        const question = await Question.findById(args.questionId);
        if (!question) {
          throw new Error('Question not found');
        };

        // const order = new Order({ question: args.question });
        const line_items = [];
        // const stripeQuestion = await stripe.questions.create({
        //   name:question.questionAuthhor,
        //   description:question.questionText,
        // });

        // const { questions } = await order.populate('question');
  
        // for (let i = 0; i < questions.length; i++) {
        //   const question = await stripe.questions.create({
        //     name: questions[i].questionAuthor,
        //     description: question[i].questionText,
        //   });
  
          const price = await stripe.prices.create({
            question: question._id,
            unit_amount: question.bounty,
            currency: 'usd',
          });
  
          line_items.push({
            price: price.id,
            quantity: 1
          });
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
  
        return { session: session.id };
      }
    }
};
module.exports = stripeResolver;