import BlogPost from 'components/BlogPost';

export const config = { amp: 'hybrid' }

const BlogPostPage = () => (
  <BlogPost id="my-principles">
    These are the common themes that come up when I discuss my views
    and motivations with people, as well as when I introspect
    and weigh major decisions - I distill them here
    so they can be a reference for future conversations and decisions,
    and so I can record any value drift from this point.
    <h3>1) Veil of ignorance, or Open Individualism</h3>
    <blockquote>
      <em>“Vedanta teaches that consciousness is singular, all happenings are played out in one
      universal consciousness and there is no multiplicity of selves.”</em>
      - Erwin Schrödinger, ‘My View of the World’, 1951
    </blockquote>
    Under the veil of ignorance, I <em>could</em> be you, while under{' '}
    <a href="https://opentheory.net/2018/09/a-new-theory-of-open-individualism/" target="_blank" rel="noreferrer">
      Open Individualism
    </a>{' '}
    I <em>am</em> you. Either way, if you internalize one of these viewpoints
    then you must also internalize "externalities", since you have no way of
    regarding anything as truly external. Unlike Rawls' original argument,
    I don't believe this has to take the form of maximin - the well-being
    of the average person still matters to me. Instead, I end up
    somewhere on the negative utilitarianism spectrum - though some similarities to
    maximin or rule utilitarianism could manifest due to long tails of suffering.
    <h3>2) Focusing on attractor dynamics over transient dynamics</h3>
    <p>
      At the largest scale, this principle looks a lot like{' '}
      <a href="https://80000hours.org/articles/future-generations/" target="_blank" rel="noreferrer">
        long-termism
      </a>{'. '}
      The idea is that
      how much we shift our trajectory in the short run matters little
      compared to whether we still ultimately converge to the same trajectory versus
      a different trajectory. But this principle{' '}
      <a href="https://www.youtube.com/watch?v=P_YCvTabMO4" target="_blank" rel="noreferrer">
        manifests at smaller scales as well
      </a>{'. '}
      Under this view, in policy and cultural matters
      it's important to analyze and influence the steady state, e.g. sustain or stop feedback loops.
      Thus we want to know not only that "X does good thing Y" but whether "Y causes more of X" or
      "Y reverts to the status quo". We might have to zoom out a bit to see these effects -
      for example, in{' '}
      "<a href="https://economics.mit.edu/files/10403" target="_blank" rel="noreferrer">
        Economics versus Politics: Pitfalls of Policy Advice
      </a>{'", '}
      Acemoglu and Robinson point out that we need to consider political-economic equilibrium
      rather than just economic equilibrium. I am definitely not advocating blind revolution,
      because where we restabilize matters - but I am skeptical of incrementalism.
    </p>

    <p>
      One consequence of this principle is that I actually think memes are high-impact
      (not necessarily Internet memes, but cultural memes in the broad sense).
      It would be exciting to figure out how to reliably harness virality for the greater good
      (that being said, a virality arms race could also fry our brains, which would be bad).
    </p>

    <p>
      On an even smaller scale,
      this principle is also related to the personal development idea that the greatest self-improvement
      comes from developing self-sustaining habits.
    </p>
    <h3>3) Alignment as a terminal objective</h3>
    <p>
      The buzz right now in the effective altruist movement is AI alignment - in short,
      the question of how we can ensure that if we build superintelligent conscious AI,
      its goals will align with ours. I claim this actually isn't a 100% fresh problem,
      and propose the more general, and extant, problem of consciousness alignment (including humans,
      animals, and conscious AI). That is, there already exists a massive amount of intelligence,
      with massive amounts of (potentially destructive) power and maligned interests - it's us.
      This is part of the reason I value AI alignment, but don't work on it directly.
      Going back to the long-termism idea, I believe if we work on the broader alignment problem right
      in front of us, we can come up with general solutions that avert multiple existential risk
      scenarios - war, famine, disease, etc (sidenote: if I'm going to lean into the Four Horsemen imagery,
      does malfunctioning AI count as "wild beasts"?).
    </p>
    <p>
      Another way we can arrive at the goal of general alignment is by starting with the idea of{' '}
      <a href="https://en.wikipedia.org/wiki/Incentive_compatibility" target="_blank" rel="noreferrer">
        incentive compatibility
      </a>{'. '}
      If we extend incentive compatibility to all conscious existence (including animals and conscious AI),
      and extend it in time, then we get general alignment (note that there are a bunch of
      impossibility theorems surrounding incentive compatibility, but we won't let that stop us -
      preferences are endogenous!).
      Extending incentive compatibility in time looks like an opposite of intertemporal choice, or an
      analogue of post-scarcity: I think of the state where I'm not competing with my future self
      for scarce resources, but rather for example 3pm me's preference is to be at work, 6pm me's
      preference is to go the grocery store, 7pm me's preference is to cook dinner, 8pm me's
      preference is to eat dinner, etc - I and myself make a great and sustainable team, and
      we can all act according to our true preferences.
    </p>
    <p>
      The flavor that Open Individualism lends here is that the alignment of agents
      is the internal alignment of one consciousness - much like{' '}
      "<a href="https://ideas.repec.org/a/aea/aecrev/v68y1978i2p290-94.html" target="_blank" rel="noreferrer">
        Egonomics
      </a>{'" '}
      is the internal alignment within a closed self (as above, so below).
    </p>
    <h3>Conclusion</h3>
    In this manifesto, I've managed to unironically say "it's all vibrations, man",
    "we are all one, man", and "align with the universe, man" all in one piece.
    However, as I've framed it, the principles I've presented really do summarize
    my worldview and motivation, and are what I, at this moment, would like to be held accountable to.
  </BlogPost>
);

export default BlogPostPage;
