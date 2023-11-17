import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse4Icon } from './Ellipse4Icon';
import { Group1Icon } from './Group1Icon';
import { Line2Icon } from './Line2Icon';
import classes from './Transport.module.css';

interface Props {
  className?: string;
}
/* @figmaId 118:187 */
export const Transport: FC<Props> = memo(function Transport(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.study}>Study</div>
      <div className={classes.sharing}>Sharing</div>
      <div className={classes.green}>Green</div>
      <div className={classes.tools}>Tools</div>
      <div className={classes.eCampus}>e-Campus</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle19}></div>
      <div className={classes.rectangle36}></div>
      <div className={classes.rectangle20}></div>
      <div className={classes.rectangle21}></div>
      <div className={classes.channels}>Channels</div>
      <div className={classes.icons8Group302}></div>
      <div className={classes.icons8Group305}></div>
      <div className={classes.icons8Group303}></div>
      <div className={classes.icons8Group304}></div>
      <div className={classes.computerArchitecture}>Computer Architecture</div>
      <div className={classes.notifications}>Notifications</div>
      <div className={classes.ubejdQazimi}>Ubejd Qazimi</div>
      <div className={classes.Uq30651}>@uq30651</div>
      <div className={classes.rectangle14}></div>
      <div className={classes.Seeurectorate}>@seeurectorate</div>
      <div className={classes.Cst}>@cst</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </div>
      <div className={classes.programming1}>Programming 1</div>
      <div className={classes.linearAlgebra}>Linear Algebra</div>
      <div className={classes.community}>Community</div>
      <div className={classes.calculus}>Calculus</div>
      <div className={classes.icons8Group301}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.green2}>Green</div>
      <div className={classes.ellipse4}>
        <Ellipse4Icon className={classes.icon2} />
      </div>
      <div className={classes.unnamed}>+</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
      </div>
      <div className={classes.text}> </div>
      <div className={classes.text2}> </div>
      <div className={classes.text3}> </div>
      <div className={classes.text4}> </div>
      <div className={classes.rectangle57}></div>
      <div className={classes.bicycle}>Bicycle </div>
      <div className={classes.available120140}>available 12:00 - 14:00</div>
      <div className={classes.icons8Bike1001}></div>
      <div className={classes._1Hour}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>1$</span>
          <span className={classes.label2}>/hour</span>
        </p>
      </div>
      <div className={classes.user123}>User123</div>
      <div className={classes.Username}>@username</div>
      <div className={classes._5mAgo}>·5m ago</div>
      <div className={classes.line2}>
        <Line2Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle43}></div>
      <div className={classes.rent}>Rent</div>
    </div>
  );
});
