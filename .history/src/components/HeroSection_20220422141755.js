import { useState, useEffect, useMemo } from 'react';
import '../styles/HeroElements';
import { HeroContainer } from '../styles/HeroElements';

export default function HeroSection() {
  /**
   * Sätter in arrayen i en useMemo så react inte
   * läser om den vid varje rendering.
   * Det är mer som en preformance fix
   **/
  const hiOnDiffrentLanguage = useMemo(
    () => [
      'Shalom',
      'Bonjour',
      'Hola',
      'Zdravstvuyte',
      'Nǐn hǎo',
      'Salve',
      'Konnichiwa',
      'Guten Tag',
      'Olá',
      'Anyoung haseyo',
      'Asalaam alaikum',
      'Goddag',
      'Shikamoo',
      'Goedendag',
      'Yassas',
      'Dzień dobry',
      'Selamat siang',
      'Namaste, Namaskar',
      'Merhaba',
      'Shalom',
    ],
    []
  );
  /**
   * Det här statet använder jag som en räknare för att hålla
   * koll på indexvärdet för respektive hälsningsfras
   */
  const [count, setCount] = useState(0);
  /**
   * Det här statet håller en fras i taget och som senare
   * visas i en <h1></h1> tagg i jsx:en
   */
  const [currentGreating, setCurrentGreating] = useState(
    `${hiOnDiffrentLanguage[0]}`
  );

  /**
   * Detta här useEffecten ansvarar för att köras varje gång
   * count får ett nytt värde
   **/
  useEffect(() => {
    /**
     * myGreatingIntervall är en funktion som körs
     * varje gång vikoret uppfylls, de vill säg varje 700
     * milisekund.
     **/

    const myGreatingIntervall = setInterval(() => {
      /**
       * Denna if-sats kontrollerar om det är sista värdet
       * arrayen och nollställer därefter räknaren.
       **/
      if (count === hiOnDiffrentLanguage.length - 1) {
        setCount(0);
      }
      // Här inckementerar vi räknaren med 1
      setCount((prev) => prev + 1);

      /**
       * Här sätter vi in hälsningen genom att använda count
       * som ett index-värde till hiOnDiffrentLanguage arrayen
       **/
      setCurrentGreating(`${hiOnDiffrentLanguage[count]}`);
    }, 700);
    // Detta gör vi för att städa upp intervallen efter oss
    return () => clearInterval(myGreatingIntervall);
  }, [count, hiOnDiffrentLanguage]);

  return (
    <div className='wrapper'>
      <HeroContainer>
        <div className='HeroStyle'>
          {/** currentGreating får ett nytt värde varje sekund */}
          {/** på rad nummer 74 */}

          <h1 className='greeting'>{currentGreating}</h1>

          <h1 className='name'>I'm Patrik.</h1>
          <p className='textBox'>
            I am a songwriting graphic designer with the hots for typoraphy and
            branding. I recently reskilled to a frontend developer to learn to
            also design on the web, and In that process I fell in love in UX
            design.
          </p>
          {/* <h2>Start editing to see some magic happen!</h2> */}
        </div>
        <div class='arrow-container animated fadeInDown'>
          <div class='arrow-2'>
            <i class='fa fa-angle-down'></i>
          </div>
          <div class='arrow-1 animated hinge infinite zoomIn'></div>
        </div>
      </HeroContainer>
    </div>
  );
}
