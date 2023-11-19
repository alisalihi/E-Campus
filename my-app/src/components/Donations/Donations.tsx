import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Donations.module.css';
import { Group1Icon } from './Group1Icon';
import { Line2Icon } from './Line2Icon';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Donations: FC<Props> = memo(function Donations(props = {}) {
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);

  const handleDonateButtonClick = () => {
    // Prompt the user for the donation amount
    const donationAmount = prompt("How many dollars do you want to donate?");

    if (donationAmount !== null) {
      // Parse the donation amount to a number
      const parsedDonationAmount = parseFloat(donationAmount);

      // Increment progress by the parsed donation amount
      if (!isNaN(parsedDonationAmount)) {
        const newProgress = progress + parsedDonationAmount;

        // Ensure progress doesn't exceed 100%
        const clampedProgress = Math.min(newProgress, 100);

        // Calculate the width of the progress bar (max width: 689px)
        const progressBarWidth = (clampedProgress / 100) * 689;

        // Ensure the width doesn't exceed the maximum value even when newProgress is 100
        const clampedWidth = Math.min(progressBarWidth, 689);

        setProgress(clampedProgress);
      }
    }
  };

  const handleDonateButtonClick1 = () => {
    // Prompt the user for the donation amount
    const donationAmount1 = prompt("How many dollars do you want to donate?");

    if (donationAmount1 !== null) {
      // Parse the donation amount to a number
      const parsedDonationAmount1 = parseFloat(donationAmount1);

      // Increment progress by the parsed donation amount
      if (!isNaN(parsedDonationAmount1)) {
        const newProgress1 = progress1 + parsedDonationAmount1;

        // Ensure progress doesn't exceed 100%
        const clampedProgress1 = Math.min(newProgress1, 100);

        // Calculate the width of the progress bar (max width: 689px)
        const progressBarWidth1 = (clampedProgress1 / 100) * 689;

        // Ensure the width doesn't exceed the maximum value even when newProgress is 100
        const clampedWidth1 = Math.min(progressBarWidth1, 689);

        setProgress1(clampedProgress1);
      }
    }
  };

  const progressBarWidth = (progress / 100) * 689;
  const progressBarWidth1 = (progress1 / 100) * 689;

  const clampedWidth = Math.min(progressBarWidth, 689);
  const clampedWidth1 = Math.min(progressBarWidth1, 689);
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

      <div className={classes.donations}>Donations</div>
      <div className={classes.donationList}>
        {/* <div className={classes.donationBox}>
          <div className={classes.rectangle62}></div>
          <div className={classes.plantingTrees}>Another Cause</div>
          
          <div
            className={classes.rectangle66}
            style={{ width: `${progressBarWidth}px` }}
          ></div>
          <div className={classes._100trees}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>100</span>
              <span className={classes.label2}>trees</span>
            </p>
          </div>
          <div className={classes._4}>{progress}</div>
          <div className={classes.goal}>Goal</div>
          <div className={classes.DonateButton}>
            <div className={classes.rectangle43}></div>
            <div className={classes.donate} onClick={handleDonateButtonClick}>
              Donate
            </div>
          </div>
        </div> */}
        <div className={classes.donationBox}>
          <div className={classes.rectangle62}></div>
          <div className={classes.plantingTrees}>Planting Trees</div>
          <div className={classes.rectangle67}></div>
          <div
            className={classes.rectangle66}
            style={{ width: `${progressBarWidth}px` }}
          ></div>
          <div className={classes._100trees}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>100</span>
              <span className={classes.label2}>trees</span>
            </p>
          </div>
          <div className={classes._4}>{progress}</div>
          <div className={classes.goal}>Goal</div>
          <div className={classes.DonateButton}>
            <div className={classes.rectangle43}></div>
            <div className={classes.donate} onClick={handleDonateButtonClick}>
              Donate
            </div>
          </div>
        </div>
        <div className={classes.donationBox}>
          <div className={classes.rectangle621}></div> 
          <div className={classes.plantingTrees1}>Another Cause</div>
          <div className={classes.rectangle671}></div>
          <div
            className={classes.rectangle661}
            style={{ width: `${progressBarWidth1}px` }}
          ></div>
          <div className={classes._100trees1}>
            <p className={classes.labelWrapper1}>
              <span className={classes.label}>120</span>
              <span className={classes.label2}>trees</span>
            </p>  
          </div>
          <div className={classes._41}>{progress1}</div>
          <div className={classes.goal1}>Goal</div>
          <div className={classes.DonateButton1}>
            <div className={classes.rectangle431}></div>
            <div className={classes.donate1} onClick={handleDonateButtonClick1}>
              Donate
            </div>
          </div>
        </div>
      </div>

      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.study}>
        <Link to="/study">Study</Link>
      </div>
      <div className={classes.sharing}>
        <Link to="/sharing">Sharing</Link>
      </div>
      <div className={classes.green}>
        <Link to="/donations">Donations</Link>
      </div>
      <div className={classes.tools}><Link to="/transport">Transport</Link></div>
      <div className={classes.eCampus}>e-Campus</div>
      <div className={classes.line2}>
        <Line2Icon className={classes.icon2} />
      </div>
    
    </div>
  );
});
