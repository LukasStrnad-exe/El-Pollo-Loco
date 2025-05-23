function templateImpressum() {
    return `
        <div class="impressum">
          <div class="menueFieldClose">
            <h1 class="impressum_headline">Impressum</h1>
            <div class="close_button" onclick="toggleDnone('impressum')">
              <img
                style="filter: invert(100)"
                src="assets/img/startscreen/close.png"
                alt=""
              />
            </div>
          </div>
          <div class="impressum_text">
            <p>
              Max Mustermann<br />
              MustermannStraße 64<br />
              1120 Wien
            </p>
            <h2>Kontakt</h2>
            <p>
              Telefon: 09999999999<br />
              E-Mail: maxmustermann@gmail.com
            </p>
            <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
            <p>Icons verwendet von:</p>
            <ul>
              <li>
                <a href="https://www.flaticon.com/"> Flaticon </a>
              </li>
              <li>
                <a href="https://pixabay.com/"> Pixabay </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          class="bg_startscreen"
          src="assets/img/startscreen/game_impressum_bg.png"
          alt=""
        />
    `;
}

function templateDatenschutz() {
    return `
        <div class="impressum">
          <div class="menueFieldClose">
            <h1 class="impressum_headline">Datenschutzhinweise</h1>
            <div class="close_button" onclick="toggleDnone('impressum')">
              <img
                style="filter: invert(100)"
                src="assets/img/startscreen/close.png"
              />
            </div>
          </div>
          <div class="impressum_text">
            <h2>Verantwortlicher</h2>
            <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO), ist:</p>
            <p class='generator_user_input'>Lukas Strnad</p>
            <h2>Ihre Betroffenenrechte</h2>
            <p>Unter den angegebenen Kontaktdaten können Sie gemäß EU-Datenschutz-Grundverordnung (DSGVO) jederzeit folgende Rechte ausüben:</p>
            <ul>
            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
            <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
            <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
            <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
            </ul>
            <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
            <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
            <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>
            <h2>Verarbeitungstätigkeiten</h2>
            <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
            <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
            <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.</p>
            <p>Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
            <h3>Empfänger eines Widerspruchs</h3>
            <p class='generator_user_input'>Lukas Strnad</p>
            <h2>Änderung unserer Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
            <h2>Fragen zum Datenschutz</h2>
            <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an den oben genannten Verantwortlichen.</p>
            <h2>Urheberrechtliche Hinweise</h2>
            <p><em>Diese Datenschutzerklärung wurde mit Hilfe der activeMind AG erstellt – den Experten für <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank" rel="noopener dofollow">externe Datenschutzbeauftragte</a> (Version #2024-10-25).</em></p>
          </div>
        </div>
        <img
          class="bg_startscreen"
          src="assets/img/startscreen/game_impressum_bg.png"
          alt=""
        />
    `;
}

function templateStartScreen() {
  return `
    <div class="startscreen_buttons">
      <div class="home_button" onclick="toggleDnone('gameDescription')">
        <img src="assets/img/startscreen/start_Homebutton.png" alt="Home" />
      </div>
      <div class="start_button" onclick="init()">
        <img
          src="assets/img/startscreen/start_button.png"
          alt="Start Game"
        />
      </div>
    </div>
    <div class="muteButton" id="muteButton" onclick="playMusic()">
      <img src="assets/img/startscreen/mute.png" alt="unmute">
    </div>
    <div class="muteButton" id="unmuteButton" onclick="playMusic()">
      <img src="assets/img/startscreen/unmute.png" alt="unmute">
    </div>
    <img
      class="bg_startscreen"
      src="assets/img/9_intro_outro_screens/start/startscreen_1.png"
      alt="startscreen"
    />
    <footer>
      <p
        onclick="toggleDnone('impressum'), renderFooterSides('impressum') "
      >
        Imprint
      </p>
      <p
        onclick="toggleDnone('impressum'), renderFooterSides('Datenschutz') "
      >
        Privacy
      </p>
    </footer>
  `;
}

function templateMobileGame() {
  return `
    <div id="mobile_buttons">
      <div id="moveRight" class="button_arrow_right button_arrow">
        <img src="assets/img/startscreen/arrow.png" alt="" />
      </div>
      <div id="moveLeft" class="button_arrow_left button_arrow">
        <img src="assets/img/startscreen/arrow.png" alt="" />
      </div>
      <div id="jump" class="button_arrow_up button_arrow">
        <img src="assets/img/startscreen/arrow.png" alt="" />
      </div>
      <div id="throw" class="button_bottle button_arrow">
        <img src="assets/img/startscreen/bottle.png" alt="" />
      </div>
    </div>
  `;
}