import { Caption } from './Caption'
import { ProjectName } from './ProjectName'
import { Events } from './Event'

export function Ruler() {
  return (
    <>
      <ProjectName
        title={'Ukraine War on Reddit'}
        illustration={'Made by Group 5'}
        top={30}
      />
      <Caption
        top={120}
        illustration={
          'Russo-Ukraine War started in 2014. It has sparked a great amount of discussions on Reddit.'
        }
      />
      <Caption
        top={180}
        illustration={'The original dataset was stored in ZStandard format.'}
      />
      <Caption
        top={250}
        illustration={'We will show some of the most important visualizations.'}
      />
      <Events top={310} date={'Feb 2014'} illustration={'War in Crimea.'} />
      <Events
        top={340}
        date={'May 2016'}
        illustration={'The march of separatists.'}
      />
      <Events
        top={370}
        date={'2017 - 2018'}
        illustration={'Kerch Strait incidents.'}
      />
      <Events
        top={390}
        date={'Apr 2021'}
        illustration={'Russian military exercises.'}
      />
      <Events
        top={410}
        date={'Feb 2022'}
        illustration={'The beginning of war in 2022.'}
      />
      <Events
        top={450}
        date={'2016'}
        illustration={'The activity of separatists.'}
      />
      <Events
        top={480}
        date={'March 2021'}
        illustration={'Russian military build-up.'}
      />
      <Events
        top={505}
        date={'Feb 2022'}
        illustration={"US's warn of a possible war."}
      />
      <Events
        top={535}
        date={'March 2022'}
        illustration={'The escalation of war.'}
      />
      <Events
        top={570}
        date={'Word Clouds'}
        illustration={'What Ukraine supporters & Russia supporters are saying?'}
      />
      <Events
        top={700}
        date={'Top Clicks'}
        illustration={
          'The most productive redditors and subreddits on Ukraine War.'
        }
      />
      <Events top={880} date={'Thanks for Reading.'} />
    </>
  )
}
