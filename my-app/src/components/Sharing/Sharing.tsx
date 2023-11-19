import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse4Icon } from './Ellipse4Icon';
import { Group1Icon } from './Group1Icon';
import { Group2Icon } from './Group2Icon';
import { Line2Icon } from './Line2Icon';
import classes from './Sharing.module.css';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 208:462 */
export const Sharing: FC<Props> = memo(function Sharing(props = {}) {
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
      <div className={classes.rectangle2}></div>
      <div className={classes.study}><Link to="/study">Study</Link></div>
      <div className={classes.sharing}><Link to="/sharing">Sharing</Link></div>
      <div className={classes.green}> <Link to="/donations">Donations</Link></div>
      <div className={classes.tools}><Link to="/transport">Transport</Link></div>
      <div className={classes.eCampus}>e-Campus</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle34}></div>
      <div className={classes.model124141TSDS}>Model: 124141TSDS</div>
      <div className={classes.dellLaptop}>Dell laptop </div>
      <div className={classes.group2}>
        <Group2Icon className={classes.icon2} />
      </div>
      <div className={classes.user123}>User123</div>
      <div className={classes.Username}>@username</div>
      <div className={classes._5mAgo}>·5m ago</div>
      <div className={classes.sharing2}>Sharing</div>
      <div className={classes.rectangle47}></div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </div>
      <div className={classes._720}>720€</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
      </div>
      <div className={classes.text}> </div>
      <div className={classes.line2}>
        <Line2Icon className={classes.icon3} />
      </div>
      <div className={classes.frame6}>
        <div className={classes.rent}>Rent</div>
      </div>
      <div className={classes.frame5}>
        <div className={classes.ellipse4}>
          <Ellipse4Icon className={classes.icon4} />
        </div>
        <div className={classes.unnamed}>+</div>
      </div>
    </div>
  );
});
