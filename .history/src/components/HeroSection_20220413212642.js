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
     * varje gång vikoret uppfylls, de vill säg varje 1000
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
    }, 300);
    // Detta gör vi för att städa upp intervallen efter oss
    return () => clearInterval(myGreatingIntervall);
  }, [count, hiOnDiffrentLanguage]);

  return (
    <HeroContainer>
      <div className='HeroStyle'>
        {/** currentGreating får ett nytt värde varje sekund */}
        {/** på rad nummer 74 */}

        <h1>{currentGreating}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </HeroContainer>
  );
}
