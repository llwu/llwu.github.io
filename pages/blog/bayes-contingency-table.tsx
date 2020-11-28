import Head from 'next/head';
import { InlineMath, BlockMath } from 'react-katex';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import r from 'react-syntax-highlighter/dist/cjs/languages/hljs/r';
import stan from 'react-syntax-highlighter/dist/cjs/languages/hljs/stan';
import python from 'react-syntax-highlighter/dist/cjs/languages/hljs/python';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import BlogPost from 'components/BlogPost';
import LatexCss from 'components/LatexCss';

export const config = {
  unstable_runtimeJS: false,
}

SyntaxHighlighter.registerLanguage('r', r);
SyntaxHighlighter.registerLanguage('stan', stan);
SyntaxHighlighter.registerLanguage('python', python);

const FLEX = { flex: 1 };
const SCALE_DOWN = { maxHeight: '100%', maxWidth: '100%', objectFit: 'scale-down' as 'scale-down' };

const BlogPostPage = () => (
  <BlogPost id="bayes-contingency-table">
    <LatexCss />
    <Head>
      <link rel="preload" href="/css/fonts/KaTeX_Math-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/css/fonts/KaTeX_Caligraphic-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/css/fonts/KaTeX_Size2-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/css/fonts/KaTeX_Main-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </Head>
    <h3 id="toc">Table of Contents</h3>
    <ol>
      <li><a href="#section1">Uniform Prior over <InlineMath math="(p_1, p_2)" /></a></li>
      <li><a href="#section2">Bayesian Logistic Regression</a></li>
      <li><a href="#section3">Beta Prior over <InlineMath math="p_1 / (p_1 + p_2)" />? (feat. Pfizer)</a></li>
    </ol>
    <h3 id="section1"><a href="#toc">1.</a> Uniform Prior on <InlineMath math="(p_1, p_2)" /></h3>
    <p>
      One of the more dubious statistical tests I've come across is{' '}
      <a href="https://en.wikipedia.org/wiki/Fisher%27s_exact_test" target="_blank" rel="noopener noreferrer">
        Fisher's exact test
      </a>.
      So I did a quick Google search, and apparently{' '}
      <a href="https://statmodeling.stat.columbia.edu/2009/10/13/what_is_the_bay/" target="_blank" rel="noopener noreferrer">
        Andrew Gelman agrees
      </a>.
      I don't think his suggestion i) (model the 2x2 contingency table with two independent binomial distributions)
      is generally applicable though. This is because in contingency table applications, I'd want more weight
      on the "null hypothesis" <InlineMath math="p_1 = p_2" />, which would imply non-independence.
      Indeed, the uniform distribution over{' '}
      <InlineMath math="[0,1] \times [0,1]" /> only places 50% likelihood on a risk ratio between 1/2 and 2,
      and 75% likelihood on an absolute difference of less than .5:
    </p>
    <div style={{ display: "flex", flexDirection: "row", maxWidth: '600px', margin: 'auto' }} key="img1">
      <div style={FLEX}>
        <img src="/blog-img/bayes-contingency-table/odds-ratio-uniform.svg" style={SCALE_DOWN} />
      </div>
      <div style={FLEX}>
        <img src="/blog-img/bayes-contingency-table/odds-diff-uniform.svg" style={SCALE_DOWN} />
      </div>
    </div>
    <p>
      Accordingly, {' '}
      <a href="https://lingpipe-blog.com/2009/10/13/bayesian-counterpart-to-fisher-exact-test-on-contingency-tables/"
        target="_blank" rel="noopener noreferrer">
        Bob Carpenter's blog post
      </a>{' '}
      using this prior is quite generous,
      placing over 90% likelihood on men having a higher
      percentage of left-handedness than women given the following toy data
      from Wikipedia:
    </p>
    <table cellPadding="5">
      <tr>
        <th></th>
        <th>Left-Handed</th>
        <th>Right-Handed</th>
        <th>Total</th>
      </tr>
      <tr>
        <th>Male</th>
        <td>9</td>
        <td>43</td>
        <td>52</td>
      </tr>
      <tr>
        <th>Female</th>
        <td>4</td>
        <td>44</td>
        <td>48</td>
      </tr>
      <tr>
        <th>Total</th>
        <td>13</td>
        <td>87</td>
        <td>100</td>
      </tr>
    </table>
    <p>
      For comparison, Fisher's exact test (note that this is two-tailed -
      the one-tailed p-value would be 0.1196):
    </p>
      <SyntaxHighlighter language="r" style={docco}>
{`> data = matrix(c(9,4,43,44), nrow=2)
> fisher.test(data)

	Fisher's Exact Test for Count Data

data:  data
p-value = 0.2392
alternative hypothesis: true odds ratio is not equal to 1
95 percent confidence interval:
  0.582996 10.927993
sample estimates:
odds ratio
2.283832`}
    </SyntaxHighlighter>
    <p>
      A frequentist logistic regression
      (where the p-values are again two-tailed)
      is somewhat more on par with the uniform prior results:
    </p>
    <SyntaxHighlighter language="r" style={docco}>
{`> frequentist_logistic_reg <- glm(formula = cbind(c(9, 4), c(43, 44)) ~ as.factor(c(0.5, -0.5)),
                                  family = binomial())
> summary(frequentist_logistic_reg)
...
Coefficients:
                           Estimate Std. Error z value Pr(>|z|)
(Intercept)                 -2.3979     0.5222  -4.592  4.4e-06 ***
as.factor(c(0.5, -0.5))0.5   0.8339     0.6380   1.307    0.191`}
    </SyntaxHighlighter>
    <h3 id="section2"><a href="#toc">2.</a> Bayesian Logistic Regression</h3>
    <p>
      We can actually encode the conservative prior belief
      that handedness is unlikely to significantly differ between males and females,
      by making the logit model Bayesian.
      We place a weakly informative <InlineMath math="\mathcal{N}(0,1)" /> prior on the coefficient,
      which is the log-odds ratio, and simulate the uniform marginals that we had before
      by using a <InlineMath math="\text{Logistic}(0,1)" /> prior on the intercept
      (in most settings, I'd pick tighter priors, but for this toy data
      I'm interested in the impact of just the coefficient prior).
      The marginal and joint priors for <InlineMath math="(p_1, p_2)" /> look like the following
      (using <code>seaborn.kdeplot</code>) - note that the marginal isn't
      perfectly flat, since adding in the coefficient fattens up the distribution
      of <InlineMath math="\operatorname{logit}(p_1)" />, but it's close enough:
    </p>
    <div style={{ display: "flex", flexDirection: "row", maxWidth: '600px', margin: 'auto' }} key="img2">
      <div style={FLEX}>
        <img src="/blog-img/bayes-contingency-table/marginal-prior.svg" style={SCALE_DOWN} />
      </div>
      <div style={FLEX}>
        <img src="/blog-img/bayes-contingency-table/joint-prior.png" style={SCALE_DOWN} />
      </div>
    </div>
    <p>
      In Stan, we can code the model as:
    </p>
    <SyntaxHighlighter language="stan" style={docco}>
{`data {
  real x1;
  real x2;
  int<lower=0> y1;
  int<lower=0> n1;
  int<lower=0> y2;
  int<lower=0> n2;
}
parameters {
  real intercept;
  real coeff;
}
model {
  intercept ~ logistic(0, 1);
  coeff ~ normal(0, 1);
  y1 ~ binomial_logit(n1, intercept + coeff * x1);
  y2 ~ binomial_logit(n2, intercept + coeff * x2);
}`}
    </SyntaxHighlighter>
    And we can run the model on our toy data in <code>rstan</code>:
    <SyntaxHighlighter language="r" style={docco}>
{`> stan_dat = list(x1 = -0.5, x2 = 0.5, y1 = 4, n1 = 48, y2 = 9, n2 = 52)
> stan_fit <- stan(file = "lreg.stan", data = stan_dat, chains=4, cores=2, iter=10000)
> samples <- extract(stan_fit, pars=c('intercept', 'coeff'))
> summary(samples$intercept)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
-3.5257 -2.1215 -1.9175 -1.9293 -1.7231 -0.9438
> summary(samples$coeff)
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
-1.3620  0.2370  0.5812  0.5880  0.9338  2.9494
> mean(samples$coeff < 0)
[1] 0.12855
> men_logits <- samples$intercept + 0.5 * samples$coeff
> women_logits <- samples$intercept - 0.5 * samples$coeff
> men_p <- invlogit(men_logits)
> women_p <- invlogit(women_logits)
> p_diff <- men_p - women_p
> quantile(p_diff, c(0.005,0.025,0.5,0.975,0.995))
       0.5%        2.5%         50%       97.5%       99.5%
-0.08969971 -0.04901461  0.06404981  0.18018982  0.22328685
> odds_ratio <- (men_p / (1 - men_p)) / (women_p / (1 - women_p))
> quantile(odds_ratio, c(0.005,0.025,0.5,0.975,0.995))
     0.5%      2.5%       50%     97.5%     99.5%
0.4839859 0.6534247 1.7881112 5.1106308 7.2953805`}
    </SyntaxHighlighter>
    <p>
      Notice the shrinkage, compared to the frequentist version. We can also see that
      the resulting 12.9% chance of men being less likely to be left-handed
      is greater than the corresponding one-sided value from the uniform prior
      inference, the frequentist logit model, and Fisher's exact test.
      The 95% credible intervals are also more pessimistic:
      [-0.049, 0.18] for the absolute difference vs [-0.046, 0.218]
      from the uniform prior inference,
      and [0.653, 5.111] for the odds ratio vs a confidence interval
      of [0.583, 10.928] from Fisher's exact test.
      The tighter the priors, the more pessimistic we will be.
    </p>
    <p>
      What would you conclude if you saw this data? (Fun fact: there seems to be a fair amount of
      actual data on handedness on the Internet, and the conclusion seems to be that
      men are indeed more likely to be left-handed, along with a handful -
      no pun intended - of other conclusions. I have not reviewed any of the studies, though).
    </p>
    <p>
      What if we have an <InlineMath math="m \times n" /> contingency table? Then we can do the same analysis
      using a multinomial logit model (which is just <InlineMath math="n - 1" /> logits),
      and dummy variables (<InlineMath math="m - 1" /> of them, to avoid multicollinearity).
      If we had a meta-analysis of many such tables, we could place a hyperprior
      over the coefficient priors (a.k.a. hierarchical Bayes).
    </p>
    <p>
      Another side note: logistic regression also works on the data from the Wikipedia page on{' '}
      <a href="https://en.wikipedia.org/wiki/Simpson%27s_paradox" target="_blank" rel="noopener noreferrer">
        Simpson's paradox
      </a> -
      in fact, Simpson's paradox can be interpreted as omitted variable bias.
      Another way to understand omitted variable bias is the{' '}
      <a href="https://en.wikipedia.org/wiki/Frisch%E2%80%93Waugh%E2%80%93Lovell_theorem" target="_blank" rel="noopener noreferrer">
        Frisch–Waugh–Lovell (FWL) theorem
      </a> -
      when you partial out other covariates, your causal effect changes.
    </p>
    <h3 id="section3"><a href="#toc">3.</a> Beta Prior over <InlineMath math="p_1 / (p_1 + p_2)" />? (feat. Pfizer)</h3>
    <p>
      So if we look at the{' '}
      <a href="https://pfe-pfizercom-d8-prod.s3.amazonaws.com/2020-09/C4591001_Clinical_Protocol.pdf#page=102" target="_blank" rel="noopener noreferrer">
        study design
      </a>{' '}
      for the recent Biontech/Pfizer COVID-19 vaccine results - something interesting jumps out:
      instead of placing a prior on <InlineMath math="(p_1, p_2)" />{' '}
      (where <InlineMath math="p_1" /> is the probability that a given patient from the treatment group gets COVID-19,
      and <InlineMath math="p_2" /> is the probability that a given patient from the control group gets COVID-19),
      they place a{' '}
      <InlineMath math="\text{Beta}(0.7, 1)" /> prior on{" "}
      <InlineMath math="\theta = p_1 / (p_1 + p_2)" />. But wait! Isn't the model underparameterized now?
      We had two parameters, and now we have one!
      Indeed, if <InlineMath math="y_1" /> out of <InlineMath math="n_1" /> patients from the treatment group
      get COVID-19 and <InlineMath math="y_2" /> out of <InlineMath math="n_2" /> patients from the control group
      get COVID-19, then we don't have a well-defined evidence, as
      <div key="tex1" style={{ overflow: 'scroll' }}>
        <BlockMath math="
          P(y_1, y_2 \mid \theta) = \int_0^1
          \operatorname{B}(y_1; n_1, p_1)\operatorname{B}(y_2; n_2, p_1(\dfrac{1}{\theta} - 1))P(p_1 \mid \theta) \,dp_1
          \tag{1}
        " />
      </div>
      can take multiple relative values for fixed values of <InlineMath math="\theta" />, by varying the
      distribution of <InlineMath math="p_1" />. In other words, we can't technically do Bayesian inference
      on the contingency table,
      since we don't take into account the base rate of infection.
    </p>
    <p>
      So how does the reconstructed experiment in{' '}
      <a href="https://skranz.github.io/r/2020/11/11/CovidVaccineBayesian.html" target="_blank" rel="noopener noreferrer">
        Kranz's post
      </a>{' '}
      work? He transforms the problem into a binomial model on the infected patients,
      assuming <InlineMath math="n_1 = n_2" />, i.e.
      <div key="tex2" style={{ overflow: 'scroll' }}>
        <BlockMath math="P(y_1, y_2 \mid \theta) = \operatorname{B}(y_1; y_1 + y_2, \theta) \tag{2}" />
      </div>
      so that we can do a simple conjugate prior model. This is a clever transformation,
      though note that it deviates from reality in the sense that it conditions on <InlineMath math="y_1 + y_2" />,
      and in the sense that the binomial distribution models
      draws with replacement
      (whereas <InlineMath math="\text{(1)}" /> is the expression for draws without replacement).
      For example, if{' '}
      we had <InlineMath math="n_1 = 100" /> and <InlineMath math="y_1 + y_2 = 150" />,
      then we would never see <InlineMath math="y_1 = 125" /> despite that having a nonzero
      probability in the binomial distribution (notice that <InlineMath math="\text{(2)}" />{' '}
      doesn't include <InlineMath math="n_1" /> or <InlineMath math="n_2" /> at all).
    </p>
    <p>
      Fortunately, in the Pfizer trial we have <InlineMath math="n = n_1, n_2 \gg y_1, y_2" />{' '}
      (<a href="https://www.npr.org/sections/health-shots/2020/11/09/933006651/pfizer-says-experimental-covid-19-vaccine-is-more-than-90-effective" target="_blank" rel="noopener noreferrer">
        43538 participants vs 94 cases
      </a>, to be precise),
      so we are effectively drawing the infected patients from an infinite population,
      and the binomial model is probably not too far off. So this could reconcile how
      the one-parameter model technically isn't well-defined for contingency tables in general,
      but could still be used to do asymptotically approximate inference in this particular regime.
    </p>
    <p>
      You can see this behavior for yourself using toy data (like we did earlier) -
      just create a contingency table, fix <InlineMath math="y_1, y_2" />,
      and vary <InlineMath math="n = n_1 = n_2" />. The single binomial model
      always yields the same posterior, but a two binomials or logistic model
      yields varying results, diverging at small <InlineMath math="n" /> and
      converging at large <InlineMath math="n" />.
    </p>
    <p>
      How large does <InlineMath math="n" /> need to be in general for this to work?
      If we marginalize over <InlineMath math="y_1 + y_2" /> and <InlineMath math="p_1" />:
    </p>
    <div key="tex3" style={{ overflow: 'scroll' }}>
      <BlockMath math="
        \begin{aligned}
        P(y_1, y_2 \mid \theta) &= P(y_1, y_2 \mid y_1 + y_2, \theta)P(y_1 + y_2\mid \theta) \\
        &= \left(\int_0^1 P(p_1 \mid y_1 + y_2, \theta)
          P(y_1 \mid y_1 + y_2, p_1, p_2)
          \right)P(y_1 + y_2 \mid \theta) \\
        \end{aligned}
      " />
    </div>
    <p>where <InlineMath math="P(y_1 \mid y_1 + y_2, p_1, p_2)" /> is bounded by</p>
    <div key="tex5" style={{ overflow: 'scroll' }}>
      <BlockMath math="
        \begin{aligned}
        &\binom{y_1+y_2}{y_1}\left[
          \dfrac{(n - y_1 - y_2)^{y_1 + y_2}p_1^{y_1}p_2^{y_2}}{(n(p_1+p_2))^{y_1 + y_2}},
          \dfrac{n^{y_1 + y_2}p_1^{y_1}p_2^{y_2}}{((n - y_1 - y_2)(p_1+p_2))^{y_1 + y_2}}
        \right] \\
        =&\binom{y_1+y_2}{y_1}\left(\dfrac{p_1}{p_1 + p_2}\right)^{y_1}
        \left(\dfrac{p_2}{p_1 + p_2}\right)^{y_2}\left[
          \left(1 - \dfrac{y_1 + y_2}{n}\right)^{y_1 + y_2},
          \left(1 - \dfrac{y_1 + y_2}{n}\right)^{-y_1 - y_2}
        \right] \\
        =&\operatorname{B}(y_1 ; y_1 + y_2, \theta)\left[
          \left(1 - \dfrac{y_1 + y_2}{n}\right)^{y_1 + y_2},
          \left(1 - \dfrac{y_1 + y_2}{n}\right)^{-y_1 - y_2}
        \right] \\
        \subset&\operatorname{B}(y_1 ; y_1 + y_2, \theta)\left[
          1 - \dfrac{(y_1 + y_2)^2}{n},
          \left(1 - \dfrac{(y_1 + y_2)^2}{n}\right)^{-1}
        \right] \\
        \end{aligned}
      " />
    </div>
      <p>so if <InlineMath math="y_1 + y_2 = \sqrt{Cn}" />, then with a relative error of <InlineMath math="C" />,</p>
    <div key="tex6" style={{ overflow: 'scroll' }}>
      <BlockMath math="
        \begin{aligned}
        P(y_1, y_2 \mid \theta) \approx
          &\left(\int_0^1 P(p_1 \mid y_1 + y_2, \theta)
          \operatorname{B}(y_1 ; y_1 + y_2, \theta)\right)P(y_1 + y_2 \mid \theta) \\
        = &\operatorname{B}(y_1 ; y_1 + y_2, \theta)P(y_1 + y_2 \mid \theta) \\
        \end{aligned}
      " />
    </div>
    <p>
      which is equivalent to <InlineMath math="\text{(2)}" /> if we assume <InlineMath math="y_1 + y_2" />{' '}
      to be distributed independently of <InlineMath math="\theta" />.
    </p>
    <p>
      This approximation is reminiscent of the{' '}
      <a href="https://en.wikipedia.org/wiki/Poisson_limit_theorem" target="_blank" rel="noopener noreferrer">
        law of rare events
      </a>,
      which requires <InlineMath math="n_1, n_2 \gg p_1, p_2" />:
      "There is a rule of thumb stating that the Poisson distribution is a good approximation of the
      binomial distribution if <InlineMath math="n" /> is at least 20 and <InlineMath math="p" /> is
      smaller than or equal to 0.05, and an excellent approximation if <InlineMath math="n \ge 100" />{' '}
      and <InlineMath math="np \le 10" />". Note that this condition is slightly different than what we can observe,
      but we can still apply the law of rare events starting with the observed{' '}
      <InlineMath math="n_1 = n_2 = n \gg y_1, y_2" />, by noting that the integrand of{' '}
      <InlineMath math="\text{(1)}" /> is significant only up to some value{' '}
      <InlineMath math="p = O(y/n)" />, due to the Chernoff bound
      (assuming also that we have prior density in this area).
      So we can pick <InlineMath math="\delta(\theta)" /> such that:
    </p>
    <div key="tex4" style={{ overflow: 'scroll' }}>
      <BlockMath math="
        \begin{aligned}
        P(y_1, y_2 \mid \theta) &= \int_0^1
        \operatorname{B}(y_1; n_1, p_1)\operatorname{B}(y_2; n_2, p_1(\dfrac{1}{\theta} - 1))P(p_1 \mid \theta) \,dp_1 \\
        &\approx \int_0^{\delta}
        \operatorname{Pois}(y_1; np_1)\operatorname{Pois}(y_2; np_2)P(p_1 \mid \theta) \,dp_1 \\
        &= \int_0^{\delta}
        \dfrac{(np_1)^{y_1}e^{-np_1}}{y_1!}\dfrac{(np_2)^{y_2}e^{-np_2}}{y_2!}P(p_1 \mid \theta) \,dp_1 \\
        &= \int_0^{\delta}
        \dfrac{p_1^{y_1}p_2^{y_2}}{y_1!y_2!}n^{y_1 + y_2}e^{-n(p_1 + p_2)}P(p_1 \mid \theta) \,dp_1 \\
        &= \int_0^{\delta}
        \dfrac{p_1^{y_1}p_2^{y_2}(y_1 + y_2)!}{y_1!y_2!(p_1 + p_2)^{y_1 + y_2}}
        \dfrac{(n(p_1 + p_2))^{y_1 + y_2}e^{-n(p_1+p_2)}}{(y_1 + y_2)!}P(p_1 \mid \theta) \,dp_1 \\
        &= \int_0^{\delta}
        \binom{y_1 + y_2}{y_1}\left(\dfrac{p_1}{p_1 + p_2}\right)^{y_1}
        \left(\dfrac{p_2}{p_1 + p_2}\right)^{y_2}\operatorname{Pois}(y_1 + y_2; n(p_1 + p_2))P(p_1 \mid \theta) \,dp_1 \\
        &= \operatorname{B}(y_1; y_1 + y_2, \theta) \int_0^{\delta}
        \operatorname{Pois}(y_1 + y_2; n(p_1 + p_2))P(p_1 \mid \theta) \,dp_1 \\
        &\approx \operatorname{B}(y_1; y_1 + y_2, \theta) \int_0^{\delta}
        \operatorname{B}(y_1 + y_2; n, p_1 + p_2)P(p_1 \mid \theta) \,dp_1 \\
        &\approx \operatorname{B}(y_1; y_1 + y_2, \theta) P(y_1 + y_2 \mid \theta)
        \end{aligned}
      " />
    </div>
    <p>
      So now with again the final assumption that <InlineMath math="y_1 + y_2" /> is
      distributed independently of <InlineMath math="\theta" />,
      we have derived <InlineMath math="\text{(2)}" /> again!
      Note that the <InlineMath math="y = \mathcal{O}(\sqrt{n})" /> assumption pops out again,
      since the Poisson limit uses the limit for <InlineMath math="e" />, i.e.{' '}
      <InlineMath math="(1 - p)^{n - y} \to e^{-np}e^{yp}" />, and{' '}
      <InlineMath math="p = O(y/n)" /> gives us <InlineMath math="O(e^{y^2/n})" />{' '}
      relative error.
    </p>
    <p>
    It's a bit surprising that we didn't find <InlineMath math="y = \mathcal{O}(n)" />.
    Is <InlineMath math="y = \mathcal{O}(\sqrt{n})" /> tight? Technically it is, since in the extreme case
    where <InlineMath math="y_2 = 0" />:
    </p>
    <div key="tex7" style={{ overflow: 'scroll' }}>
      <BlockMath math="
        \begin{aligned}
        P(y_1 = y \mid y_1 + y_2 = y, p_1, p_2) &=
          \prod_{i=0}^{y} \dfrac{(n-i)p_1}{(n-i)p_1 + np_2} \\
        \end{aligned}
      " />
    </div>
    The binomial approximation <InlineMath math="p_1^y" /> is spot on as <InlineMath math="\theta \to 1" />,
    and as <InlineMath math="\theta \to 0" /> the relative error approaches (using Stirling's approximation):
    <div key="tex8" style={{ overflow: 'scroll' }}>
      <BlockMath math="
        \begin{aligned}
        \dfrac{n!}{(n-y)!n^y} &\approx \dfrac{\sqrt{2\pi n}\left(\dfrac{n}{e}\right)^n}{
          \sqrt{2\pi (n-y)}\left(\dfrac{n-y}{e}\right)^{n - y}n^y} \\
        &= e^{-y}\left(1 - \dfrac{y}{n}\right)^{y - n - \frac{1}{2}} \\
        &\approx e^{-y}e^{-\frac{y^2}{n} + y + \frac{y}{2n}} \\
        &= e^{-(y^2 - \frac{y}{2})/n}
        \end{aligned}
      " />
    </div>
    <p>
      In other words, the approximation slightly under-updates the posterior.
      This is not such a bad outcome, since
      for example, in the Pfizer study if all 94 cases were in the control group, then we would
      leave around 22% too much mass on the <InlineMath math="\theta \to 1" /> tail,
      but that tail would still be tiny (as Bayesians, we're already winging it when it comes to tail mass).
    </p>
    <p>
      Is this a common approximation in the medical field? I don't know.
      This was my first time seeing it though, and the math was pretty cool.
    </p>
    <p>
      That being said, since Bayesian logit models (and any Bayesian model within the reach of
      MCMC/Variational Inference)
      are already easy to fit using a computer,
      there isn't in general any need to use approximation -
      maybe numerical stability if we need to deal with extremely large counts,
      or if we want to define an unusually specific prior on <InlineMath math="\theta" /> {' '}
      (e.g.{' '}
      <a href="http://www.mas.ncl.ac.uk/~nlf8/teaching/mas2317/notes/chapter3.pdf" target="_blank" rel="noopener noreferrer">
        prior elicitation
      </a> using quantiles or some other method).
      Just for fun, I'll try my earlier Stan model on some possible contingency tables for the Pfizer trials.
      This time I'll use fatter-tailed <InlineMath math="\operatorname{Cauchy}(0,1)" /> prior for the coefficient,
      to reflect the setting. Here is the resulting prior density for vaccine efficacy:
      <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto', maxWidth: '400px' }} key="img3">
        <div style={FLEX}>
          <img src="/blog-img/bayes-contingency-table/prior-ve-pdf.svg" style={SCALE_DOWN} />
        </div>
      </div>
    </p>
    <SyntaxHighlighter language="python" style={docco}>
{`>>> np.quantile(ve, [0.05,0.90,0.95,0.975,0.99])
array([-28.82565825,   0.75722787,   0.93598612,   0.99053768,
         0.99953615], dtype=float128)`}
    </SyntaxHighlighter>
    <p>
      And now, the contingency tables:
    </p>
    <table cellPadding="5">
      <tr>
        <th></th>
        <th>Infected</th>
        <th>Uninfected</th>
        <th>Total</th>
      </tr>
      <tr>
        <th>Treatment</th>
        <td>8</td>
        <td>21761</td>
        <td>21769</td>
      </tr>
      <tr>
        <th>Control</th>
        <td>86</td>
        <td>21683</td>
        <td>21769</td>
      </tr>
      <tr>
        <th>Total</th>
        <td>94</td>
        <td>43444</td>
        <td>43538</td>
      </tr>
    </table>
    <SyntaxHighlighter language="r" style={docco}>
{`> stan_dat = list(x1 = -0.5, x2 = 0.5, y1 = 86, n1 = 21769, y2 = 8, n2 = 21769)
> stan_fit <- stan(file = "lreg.stan", data = stan_dat, chains=4, cores=2, iter=10000)
> samples <- extract(stan_fit, pars=c('intercept', 'coeff'))
> treatment_logits <- samples$intercept + 0.5 * samples$coeff
> control_logits <- samples$intercept - 0.5 * samples$coeff
> treatment_p <- invlogit(treatment_logits)
> control_p <- invlogit(control_logits)
> ve <- 1 - treatment_p/control_p
> quantile(ve1, c(0.005,0.025,0.5,0.975,0.995))
     0.5%      2.5%       50%     97.5%     99.5%
0.7593659 0.8003920 0.8957004 0.9524886 0.9648558`}
    </SyntaxHighlighter>
    <p>80-95.2% vaccine efficacy - not bad!</p>
    <table cellPadding="5">
      <tr>
        <th></th>
        <th>Infected</th>
        <th>Uninfected</th>
        <th>Total</th>
      </tr>
      <tr>
        <th>Treatment</th>
        <td>3</td>
        <td>21766</td>
        <td>21769</td>
      </tr>
      <tr>
        <th>Control</th>
        <td>91</td>
        <td>21678</td>
        <td>21769</td>
      </tr>
      <tr>
        <th>Total</th>
        <td>94</td>
        <td>43444</td>
        <td>43538</td>
      </tr>
    </table>
    <SyntaxHighlighter language="r" style={docco}>
{`> stan_dat = list(x1 = -0.5, x2 = 0.5, y1 = 91, n1 = 21769, y2 = 3, n2 = 21769)
...
> quantile(ve, c(0.005,0.025,0.5,0.975,0.995))
     0.5%      2.5%       50%     97.5%     99.5%
0.8674722 0.8941107 0.9590702 0.9883797 0.9931797`}
    </SyntaxHighlighter>
    <p>
      89.4-98.8% - even better!
      Here are the posterior pdf plots for the above two contingency table analyses:
    </p>
    <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto', maxWidth: '400px' }} key="img4">
      <div style={FLEX}>
        <img src="/blog-img/bayes-contingency-table/ve-pdf.svg" style={SCALE_DOWN} />
      </div>
    </div>
    <p>
      What do you think?
    </p>
  </BlogPost>
);

export default BlogPostPage;
