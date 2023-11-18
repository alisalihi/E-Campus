import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Donations.module.css';
import { Group1Icon } from './Group1Icon';
import { Line2Icon } from './Line2Icon';

interface Props {
  className?: string;
}
/* @figmaId 205:59 */
export const Donations: FC<Props> = memo(function Donations(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.topContributers}>Top Contributers</div>
      <div className={classes.notifications}>Notifications</div>
      <div className={classes.ubejdQazimi}>Ubejd Qazimi</div>
      <div className={classes.Uq30651}>@uq30651</div>
      <div className={classes.rectangle14}></div>
      <div className={classes.Seeurectorate}>@seeurectorate</div>
      <div className={classes.Cst}>@cst</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </div>
      <div className={classes.Filonfisteki}>
        <ol className={classes.list}>
          <li>
            <div className={classes.textBlock}>@filonfisteki </div>
          </li>
        </ol>
      </div>
      <div className={classes.Zezakuizi}>
        <ol className={classes.list2}>
          <li>
            <div className={classes.textBlock2}>@zezakuizi </div>
          </li>
        </ol>
      </div>
      <div className={classes.Flacko}>
        <ol className={classes.list3}>
          <li>
            <div className={classes.textBlock3}>@flacko </div>
          </li>
        </ol>
      </div>
      <div className={classes.Imberli}>
        <ol className={classes.list4}>
          <li>
            <div className={classes.textBlock4}>@imberli </div>
          </li>
        </ol>
      </div>
      <div className={classes.Shabon12}>
        <ol className={classes.list5}>
          <li>
            <div className={classes.textBlock5}>@shabon12 </div>
          </li>
        </ol>
      </div>
      <div className={classes.Boki3}>
        <ol className={classes.list6}>
          <li>
            <div className={classes.textBlock6}>@boki3 </div>
          </li>
        </ol>
      </div>
      <div className={classes._80}> 80</div>
      <div className={classes._79}> 79</div>
      <div className={classes._802}> 80</div>
      <div className={classes._803}> 80</div>
      <div className={classes._804}> 80</div>
      <div className={classes._805}> 80</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle62}></div>
      <div className={classes.donations}>Donations</div>
      <div className={classes.plantingTrees}>Planting Trees</div>
      <div className={classes.rectangle67}></div>
      <div className={classes.rectangle66}></div>
      <div className={classes._100trees}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>100</span>
          <span className={classes.label2}>trees</span>
        </p>
      </div>
      <div className={classes._4}>4</div>
      <div className={classes.goal}>Goal</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.study}>Study</div>
      <div className={classes.sharing}>Sharing</div>
      <div className={classes.green}>Green</div>
      <div className={classes.tools}>Tools</div>
      <div className={classes.eCampus}>e-Campus</div>
      <div className={classes.line2}>
        <Line2Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle43}></div>
      <div className={classes.donate}>Donate</div>
    </div>
  );
});
