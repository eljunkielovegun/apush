// Quiz data organized by periods
const quizData = {
    period1: [
        {
            question: "Which of the following was NOT a part of the Columbian Exchange?",
            options: [
                "Corn being introduced to Europe",
                "Horses being introduced to the Americas",
                "Smallpox spreading to Native American populations",
                "Rice being introduced to Asia"
            ],
            answer: 3,
            explanation: "Rice was already cultivated in Asia long before the Columbian Exchange. The Columbian Exchange involved the transfer of plants, animals, diseases, and technologies between the Americas and the Old World after Columbus's voyages."
        },
        {
            question: "What were the '3 Gs' that drove European exploration?",
            options: [
                "Gold, Glory, and God",
                "Government, Geography, and Growth",
                "Guns, Germs, and Gold",
                "Governance, Guidance, and Greatness"
            ],
            answer: 0,
            explanation: "The '3 Gs' - Gold (wealth), Glory (fame and status), and God (spreading Christianity) - were the primary motivations for European exploration in the Age of Discovery."
        },
        {
            question: "Which Native American group formed the Haudenosaunee, a political confederation of five (later six) tribes?",
            options: [
                "Pueblo",
                "Iroquois",
                "Cherokee",
                "Sioux"
            ],
            answer: 1,
            explanation: "The Iroquois formed the Haudenosaunee, or League of Five Nations (later Six Nations), which was a sophisticated political system with a constitution known as the Great Law of Peace."
        },
        {
            question: "What was the encomienda system established by Spanish colonizers?",
            options: [
                "A system of trade between Native Americans and Europeans",
                "A labor system that granted colonizers control over Native Americans",
                "A religious conversion program for indigenous peoples",
                "A system of self-governance for Native American tribes"
            ],
            answer: 1,
            explanation: "The encomienda system was a labor arrangement where Spanish colonizers were granted the right to demand tribute and labor from Native Americans while supposedly providing protection and religious instruction."
        },
        {
            question: "Which of the following was a major consequence of the Columbian Exchange?",
            options: [
                "The immediate end of Native American cultures",
                "Widespread disease and demographic collapse of indigenous populations",
                "The introduction of democracy to European nations",
                "Immediate global economic equality"
            ],
            answer: 1,
            explanation: "Diseases like smallpox, measles, and influenza, to which Native Americans had no immunity, caused devastating population losses, with some regions experiencing up to 90% population decline."
        },
        {
            question: "Who was Bartolomé de las Casas?",
            options: [
                "A conquistador who led the conquest of the Aztec Empire",
                "A Spanish priest who advocated for humane treatment of indigenous peoples",
                "A Native American leader who organized resistance against Spanish colonizers",
                "The first governor of New Spain"
            ],
            answer: 1,
            explanation: "Bartolomé de las Casas was a Spanish Dominican friar who witnessed and documented the abuses of indigenous peoples and became their advocate, influencing Spanish colonial policies."
        },
        {
            question: "Which of the following crops was NOT native to the Americas before European contact?",
            options: [
                "Maize (corn)",
                "Potatoes",
                "Wheat",
                "Tomatoes"
            ],
            answer: 2,
            explanation: "Wheat was native to the Old World and was brought to the Americas by European colonizers. Maize, potatoes, and tomatoes were all indigenous to the Americas."
        },
        {
            question: "What agricultural system, involving corn, beans, and squash, was practiced by many Native American societies?",
            options: [
                "Three Sisters",
                "Crop Rotation",
                "Slash-and-Burn",
                "Monoculture"
            ],
            answer: 0,
            explanation: "The Three Sisters agricultural system involved planting corn, beans, and squash together. The corn provided a structure for beans to climb, beans fixed nitrogen in the soil, and squash leaves provided ground cover to reduce weeds and retain moisture."
        },
        {
            question: "What was the primary goal of the Spanish mission system in the Americas?",
            options: [
                "To establish trading posts for economic exchange",
                "To convert indigenous peoples to Christianity",
                "To create military outposts for defense",
                "To establish scientific research stations"
            ],
            answer: 1,
            explanation: "The primary goal of the Spanish mission system was to convert indigenous peoples to Christianity, although missions also served as centers of Spanish cultural influence and control."
        },
        {
            question: "The Treaty of Tordesillas (1494) established what arrangement?",
            options: [
                "Peace between warring Native American tribes",
                "Division of newly discovered lands between Spain and Portugal",
                "Alliance between France and England against Spain",
                "Trading rights between European merchants and Native Americans"
            ],
            answer: 1,
            explanation: "The Treaty of Tordesillas, mediated by Pope Alexander VI, divided newly discovered lands outside of Europe between Spain and Portugal along a meridian 370 leagues west of the Cape Verde islands."
        }
    ],
    period2: [
        {
            question: "What was the significance of the Mayflower Compact (1620)?",
            options: [
                "It established the first representative assembly in the colonies",
                "It created a form of self-government based on majority rule",
                "It declared independence from British rule",
                "It established freedom of religion for all colonists"
            ],
            answer: 1,
            explanation: "The Mayflower Compact established a civil government for Plymouth Colony based on majority rule and consent of the governed, setting an important precedent for self-governance in the colonies."
        },
        {
            question: "Which colony was founded as a haven for Catholics?",
            options: [
                "Massachusetts Bay",
                "Pennsylvania",
                "Maryland",
                "Georgia"
            ],
            answer: 2,
            explanation: "Maryland was founded by Lord Baltimore (Cecil Calvert) as a haven for Catholics, though it later passed the Act of Toleration (1649) to protect all Christians."
        },
        {
            question: "What was the headright system?",
            options: [
                "A voting system where only property owners could participate",
                "A land distribution policy that granted land to those who paid for passage to the colonies",
                "A religious hierarchy in Puritan communities",
                "A military defensive formation used against Native American attacks"
            ],
            answer: 1,
            explanation: "The headright system granted land (typically 50 acres) to colonists who paid for their own or others' passage to the colonies, encouraging immigration and the importation of indentured servants."
        },
        {
            question: "Which of the following best describes the economic system of mercantilism?",
            options: [
                "Free trade between all nations with minimal government intervention",
                "A system where colonies exist primarily to provide raw materials to and buy finished goods from the mother country",
                "Equal economic partnerships between European powers and their colonies",
                "A focus on agricultural self-sufficiency within colonies"
            ],
            answer: 1,
            explanation: "Mercantilism viewed colonies as existing to benefit the mother country economically by providing raw materials, buying finished goods, and helping accumulate precious metals while limiting colonial manufacturing."
        },
        {
            question: "What event marked a significant turning point in the status of African Americans in colonial Virginia?",
            options: [
                "Bacon's Rebellion (1676)",
                "The founding of Jamestown (1607)",
                "The First Great Awakening (1730s-1740s)",
                "The Stono Rebellion (1739)"
            ],
            answer: 0,
            explanation: "Bacon's Rebellion, which united poor whites and blacks against the colonial elite, contributed to the shift from reliance on indentured servants to a greater emphasis on slavery, with subsequent laws more clearly defining slavery as a hereditary, racial status."
        },
        {
            question: "What was a key feature of the Middle Colonies' economy?",
            options: [
                "Large-scale tobacco plantations",
                "Diverse agriculture and grain production",
                "Primarily fishing and shipbuilding",
                "Industrial manufacturing"
            ],
            answer: 1,
            explanation: "The Middle Colonies (New York, Pennsylvania, New Jersey, Delaware) were known as the 'breadbasket colonies' due to their fertile soil and diverse agricultural production, particularly grain."
        },
        {
            question: "Which religious group founded Pennsylvania?",
            options: [
                "Puritans",
                "Catholics",
                "Quakers",
                "Anglicans"
            ],
            answer: 2,
            explanation: "Pennsylvania was founded by William Penn as a haven for Quakers, who faced persecution in England for their religious beliefs."
        },
        {
            question: "What was the significance of the Navigation Acts passed by England in the 1660s?",
            options: [
                "They granted colonies the right to trade freely with all nations",
                "They restricted colonial trade to benefit England's economic interests",
                "They established new colonies in North America",
                "They provided military protection for colonial shipping"
            ],
            answer: 1,
            explanation: "The Navigation Acts restricted colonial trade to England or English ships and required certain colonial products to be shipped to England first before going to other markets, supporting mercantilism."
        },
        {
            question: "What was the impact of the First Great Awakening (1730s-1740s) on colonial society?",
            options: [
                "It led directly to demands for independence from Britain",
                "It increased the power of established churches and traditional authority",
                "It challenged established religious authority and promoted individual spiritual experiences",
                "It ended religious practice in the colonies"
            ],
            answer: 2,
            explanation: "The First Great Awakening emphasized personal, emotional religious experiences and challenged established church authority, promoting ideas of individual choice that would later influence revolutionary thinking."
        },
        {
            question: "Which of the following was NOT a major crop in the Southern Colonies?",
            options: [
                "Tobacco",
                "Rice",
                "Wheat",
                "Indigo"
            ],
            answer: 2,
            explanation: "Wheat was primarily grown in the Middle Colonies. The Southern Colonies' major cash crops included tobacco (particularly in Virginia and Maryland), rice (in the Carolinas), and indigo (used for blue dye)."
        }
    ],
    period3: [
        {
            question: "What event marked the beginning of the French and Indian War?",
            options: [
                "The Boston Massacre",
                "The Battle of Lexington and Concord",
                "Washington's defeat at Fort Necessity",
                "The Quebec Act"
            ],
            answer: 2,
            explanation: "The French and Indian War began with George Washington's defeat at Fort Necessity in 1754, following his attack on French forces at Jumonville Glen."
        },
        {
            question: "Which of the following was NOT a consequence of the French and Indian War?",
            options: [
                "Britain gained control of Canada from France",
                "Britain implemented new taxes on the colonies to pay for war debts",
                "The colonists gained greater autonomy from Britain",
                "Tensions increased between colonists and Native Americans"
            ],
            answer: 2,
            explanation: "Rather than gaining autonomy, the colonists faced increased British control after the war, including new taxes, restrictions on westward movement (Proclamation of 1763), and a larger British military presence."
        },
        {
            question: "What was the primary purpose of the Stamp Act (1765)?",
            options: [
                "To regulate postal service in the colonies",
                "To raise revenue from the colonies to help pay for their defense",
                "To restrict colonial manufacturing",
                "To punish colonies for smuggling"
            ],
            answer: 1,
            explanation: "The Stamp Act was primarily intended to raise revenue from the colonies to help pay for the costs of defending and administering Britain's expanded North American empire after the French and Indian War."
        },
        {
            question: "Thomas Paine's 'Common Sense' argued that:",
            options: [
                "The colonies should seek reconciliation with Britain",
                "Independence was necessary and monarchy was unnatural",
                "Only New England colonies should seek independence",
                "America should form an alliance with France against Britain"
            ],
            answer: 1,
            explanation: "Published in January 1776, 'Common Sense' made a persuasive case for immediate independence, criticized monarchy as an unnatural form of government, and argued that America could thrive as an independent nation."
        },
        {
            question: "The Battle of Saratoga was significant because it:",
            options: [
                "Was the final battle of the Revolutionary War",
                "Convinced France to ally with the Americans",
                "Resulted in the capture of Philadelphia by British forces",
                "Led to the drafting of the Articles of Confederation"
            ],
            answer: 1,
            explanation: "The American victory at Saratoga in 1777 demonstrated that the Continental Army could defeat British forces in a major battle and convinced France to formally ally with the Americans against Britain."
        },
        {
            question: "Which of the following was NOT a weakness of the Articles of Confederation?",
            options: [
                "Inability to collect taxes directly from citizens",
                "Lack of executive and judicial branches",
                "Requirement of unanimous consent for amendments",
                "Excessive federal control over state governments"
            ],
            answer: 3,
            explanation: "Far from exerting excessive control, the federal government under the Articles was too weak compared to state governments. The Articles required unanimous agreement for amendments and lacked power to tax, regulate trade, or enforce laws."
        },
        {
            question: "The Great Compromise at the Constitutional Convention resolved conflicts over:",
            options: [
                "Slavery in the territories",
                "Legislative representation for states",
                "Presidential powers",
                "Judicial review"
            ],
            answer: 1,
            explanation: "The Great Compromise (Connecticut Compromise) resolved the conflict between large and small states by creating a bicameral legislature with proportional representation in the House and equal representation in the Senate."
        },
        {
            question: "Which of the following was NOT a major issue addressed in The Federalist Papers?",
            options: [
                "The dangers of factions in a republic",
                "The benefits of separation of powers",
                "The justification for abolishing slavery",
                "The advantages of a federal system over a confederation"
            ],
            answer: 2,
            explanation: "The Federalist Papers did not advocate for abolishing slavery. They focused on explaining and defending the Constitution's structures, including federalism, separation of powers, checks and balances, and solutions to the problems of factions."
        },
        {
            question: "George Washington's Farewell Address warned against:",
            options: [
                "Rapid westward expansion",
                "Close ties with Native American tribes",
                "Permanent alliances with foreign nations and partisan divisions",
                "Development of a strong military"
            ],
            answer: 2,
            explanation: "Washington warned against permanent alliances with foreign powers and the dangers of partisan divisions, advocating instead for temporary alliances when necessary and unity around American national identity."
        },
        {
            question: "What event during John Adams' presidency created tensions with France?",
            options: [
                "The Whiskey Rebellion",
                "The XYZ Affair",
                "Jay's Treaty",
                "The Alien and Sedition Acts"
            ],
            answer: 1,
            explanation: "The XYZ Affair occurred when American diplomats were asked by French agents for bribes before negotiations could begin, leading to an undeclared naval war with France (the 'Quasi-War')."
        }
    ],
    period4: [
        {
            question: "The Election of 1800 is often called the 'Revolution of 1800' because:",
            options: [
                "It led to a civil war between Federalists and Democratic-Republicans",
                "It marked the first peaceful transfer of power between opposing political parties",
                "It resulted in the complete dissolution of the Federalist Party",
                "It established universal male suffrage"
            ],
            answer: 1,
            explanation: "The Election of 1800 represented the first peaceful transfer of power between opposing political parties in the United States, with Thomas Jefferson's Democratic-Republicans replacing John Adams' Federalists."
        },
        {
            question: "Marbury v. Madison (1803) established the principle of:",
            options: [
                "Executive privilege",
                "Judicial review",
                "States' rights",
                "Popular sovereignty"
            ],
            answer: 1,
            explanation: "Marbury v. Madison established the Supreme Court's power of judicial review - the authority to declare acts of Congress unconstitutional - greatly enhancing the judiciary's role in the system of checks and balances."
        },
        {
            question: "Which of the following was NOT a consequence of the Louisiana Purchase?",
            options: [
                "Doubled the size of the United States",
                "Secured control of the Mississippi River",
                "Eliminated Spanish presence in North America",
                "Provided vast new lands for western expansion"
            ],
            answer: 2,
            explanation: "The Louisiana Purchase did not eliminate Spanish presence in North America. Spain still controlled Florida, Texas, and territories in the Southwest and West."
        },
        {
            question: "What was Andrew Jackson's primary justification for Indian removal policies?",
            options: [
                "Native Americans were culturally inferior",
                "Removal would protect tribes from white settlers while opening lands for settlement",
                "Tribes had supported the British in the War of 1812",
                "The Supreme Court had ruled that tribes had no legal rights"
            ],
            answer: 1,
            explanation: "Jackson argued that removal would protect Native Americans from conflict with white settlers while allowing for white expansion, though this reasoning masked the primary goal of acquiring valuable tribal lands."
        },
        {
            question: "The Market Revolution of the early 19th century was characterized by:",
            options: [
                "Government regulation of all economic activity",
                "Shift from subsistence farming to commercial production for distant markets",
                "Decline in agricultural productivity",
                "Decreased social and geographic mobility"
            ],
            answer: 1,
            explanation: "The Market Revolution marked a fundamental shift from subsistence and local market production to commercial production for distant markets, facilitated by transportation improvements, new technologies, and financial innovations."
        },
        {
            question: "Which reform movement was led by Dorothea Dix?",
            options: [
                "Women's suffrage",
                "Abolition of slavery",
                "Treatment of the mentally ill",
                "Public education"
            ],
            answer: 2,
            explanation: "Dorothea Dix advocated for humane treatment of the mentally ill, documenting abysmal conditions in jails and almshouses where many mentally ill people were confined and campaigning for state-funded asylums."
        },
        {
            question: "Which of the following best describes the concept of 'Manifest Destiny'?",
            options: [
                "The belief that Native Americans were destined for extinction",
                "The idea that the United States was destined to expand across North America",
                "The conviction that slavery should be extended to all territories",
                "The theory that democratic government would eventually spread worldwide"
            ],
            answer: 1,
            explanation: "Manifest Destiny was the belief that American expansion across the continent was inevitable, justified, and divinely ordained, providing ideological support for territorial acquisitions in the 1840s."
        },
        {
            question: "The Missouri Compromise (1820):",
            options: [
                "Abolished slavery in all territories",
                "Admitted Missouri as a slave state and Maine as a free state while prohibiting slavery north of the 36°30' parallel",
                "Allowed popular sovereignty to determine slavery in the territories",
                "Ended the Atlantic slave trade"
            ],
            answer: 1,
            explanation: "The Missouri Compromise maintained the balance between slave and free states by admitting Missouri as a slave state and Maine as a free state, while prohibiting slavery in the remainder of the Louisiana Purchase territory north of the 36°30' parallel."
        },
        {
            question: "Which of the following was NOT a major goal of the Seneca Falls Convention (1848)?",
            options: [
                "Women's suffrage",
                "Equal educational opportunities",
                "Prohibition of alcohol",
                "Property rights for married women"
            ],
            answer: 2,
            explanation: "The Seneca Falls Convention focused on women's rights, including suffrage, education, property rights, and legal status. While many women's rights advocates later supported temperance, prohibition was not a major focus of the convention."
        },
        {
            question: "The Second Great Awakening contributed to the development of which reform movements?",
            options: [
                "Labor unions and socialist movements",
                "Nativism and anti-immigration sentiment",
                "Temperance, abolition, and moral reform",
                "States' rights and nullification"
            ],
            answer: 2,
            explanation: "The Second Great Awakening's emphasis on individual salvation and the possibility of creating a more perfect society inspired reform movements including temperance, abolition, prison reform, and education reform."
        }
    ],
    period5: [
        {
            question: "What was the primary purpose of the Emancipation Proclamation?",
            options: [
                "To free all slaves throughout the United States",
                "To free slaves only in the Confederate states",
                "To recruit freed slaves into the Union Army",
                "To compensate slave owners for their lost property"
            ],
            answer: 1,
            explanation: "The Emancipation Proclamation, issued January 1, 1863, declared free only those slaves living in states still in rebellion, making emancipation a war aim while not freeing slaves in border states loyal to the Union or areas under Union control."
        },
        {
            question: "Which of the following was NOT one of the Reconstruction Amendments?",
            options: [
                "13th Amendment (abolished slavery)",
                "14th Amendment (citizenship and equal protection)",
                "15th Amendment (voting rights for Black men)",
                "16th Amendment (federal income tax)"
            ],
            answer: 3,
            explanation: "The 16th Amendment (1913) authorized federal income tax and was not a Reconstruction Amendment. The Reconstruction Amendments were the 13th, 14th, and 15th, which abolished slavery, guaranteed citizenship and equal protection, and prohibited racial discrimination in voting."
        },
        {
            question: "What was the significance of the Compromise of 1877?",
            options: [
                "It ended Reconstruction and withdrew federal troops from the South",
                "It granted women the right to vote",
                "It established the first national parks",
                "It created the first civil rights legislation"
            ],
            answer: 0,
            explanation: "The Compromise of 1877 resolved the disputed presidential election of 1876, with Republican Rutherford B. Hayes becoming president in exchange for the withdrawal of federal troops from the South, effectively ending Reconstruction."
        },
        {
            question: "Which of the following best describes the 'Black Codes' enacted after the Civil War?",
            options: [
                "Laws that expanded rights for formerly enslaved people",
                "Secret codes used by escaping slaves on the Underground Railroad",
                "Laws restricting African Americans' rights and creating conditions similar to slavery",
                "Communication methods used by abolitionists"
            ],
            answer: 2,
            explanation: "Black Codes were restrictive laws passed by Southern states immediately after the Civil War that severely limited African Americans' rights, controlled their labor, restricted their movement, and created a legal system that perpetuated inequality."
        },
        {
            question: "What economic system emerged in the South after Reconstruction that kept many freedmen in debt and poverty?",
            options: [
                "Free market capitalism",
                "Socialism",
                "Sharecropping",
                "Mercantilism"
            ],
            answer: 2,
            explanation: "Sharecropping was a system where farmers (often former slaves) worked land owned by others, giving a portion of their crop as rent. High interest rates, unfair accounting, and crop lien systems frequently kept sharecroppers in perpetual debt."
        },
        {
            question: "Which of the following best explains why the North won the Civil War?",
            options: [
                "Superior military leadership",
                "Greater industrial capacity and resources",
                "Higher morale among troops",
                "More effective diplomatic relations"
            ],
            answer: 1,
            explanation: "The North's greater industrial capacity, larger population, more extensive railroad network, and naval superiority gave it significant advantages that eventually overcame the South's initial military successes and defensive posture."
        },
        {
            question: "What was the main purpose of Lincoln's Ten Percent Plan?",
            options: [
                "To punish Confederate leaders",
                "To provide land for freed slaves",
                "To restore Southern states to the Union quickly with minimal requirements",
                "To establish military governments in the South"
            ],
            answer: 2,
            explanation: "Lincoln's Ten Percent Plan (Proclamation of Amnesty and Reconstruction, 1863) offered a relatively lenient path for Southern states to rejoin the Union by requiring only 10% of voters to take a loyalty oath before reorganizing state governments."
        },
        {
            question: "The Radical Republicans in Congress believed that Reconstruction should:",
            options: [
                "Return power to the traditional Southern leadership quickly",
                "Focus primarily on economic development rather than civil rights",
                "Transform Southern society by ensuring civil and political rights for freedmen",
                "Establish permanent military rule in the South"
            ],
            answer: 2,
            explanation: "Radical Republicans, led by figures like Thaddeus Stevens and Charles Sumner, advocated for a more transformative Reconstruction that would ensure civil and political rights for freed people and reshape Southern society and power structures."
        },
        {
            question: "Which of the following was a major goal of the Freedmen's Bureau?",
            options: [
                "Redistribution of plantation lands to former slaves",
                "Establishing segregated public facilities",
                "Providing education, legal assistance, and economic support to former slaves",
                "Relocating former slaves to Africa"
            ],
            answer: 2,
            explanation: "The Freedmen's Bureau was created in 1865 to provide practical assistance to formerly enslaved people, including education, negotiating labor contracts, establishing schools, and providing humanitarian aid."
        },
        {
            question: "What was the significance of the Battle of Antietam in September 1862?",
            options: [
                "It was the final battle of the Civil War",
                "It provided Lincoln the opportunity to issue the Emancipation Proclamation",
                "It marked the first use of ironclad ships in warfare",
                "It opened the Mississippi River to Union control"
            ],
            answer: 1,
            explanation: "The Battle of Antietam, though tactically inconclusive, was enough of a victory to give Lincoln the political opportunity to issue the preliminary Emancipation Proclamation, changing the character and purpose of the war."
        }
    ],
    period6: [
        {
            question: "What was the significance of the Transcontinental Railroad completed in 1869?",
            options: [
                "It connected the eastern and western United States, facilitating national market integration",
                "It connected the United States and Canada, enabling international trade",
                "It provided a route for European immigrants to reach the Midwest",
                "It allowed for rapid military deployment during the Civil War"
            ],
            answer: 0,
            explanation: "The Transcontinental Railroad, connecting Omaha, Nebraska to Sacramento, California, dramatically reduced travel time and shipping costs across the country, facilitating national market integration, western settlement, and resource extraction."
        },
        {
            question: "What business practice is associated with John D. Rockefeller's Standard Oil Company?",
            options: [
                "Vertical integration",
                "Horizontal integration",
                "Deficit spending",
                "Open competition"
            ],
            answer: 1,
            explanation: "Rockefeller's Standard Oil exemplified horizontal integration - the consolidation of many firms at the same stage of production. By 1880, Standard Oil controlled about 90% of American oil refining."
        },
        {
            question: "Which of the following was NOT a factor in the massive immigration to the United States between 1880 and 1920?",
            options: [
                "Religious persecution in Eastern Europe",
                "Economic opportunities in American industry",
                "Government-sponsored immigration programs",
                "Political instability in Southern Europe"
            ],
            answer: 2,
            explanation: "The U.S. government did not sponsor immigration during this period. Mass immigration was driven by push factors like religious persecution, economic hardship, and political instability in Europe, and pull factors like economic opportunities in America."
        },
        {
            question: "The Chinese Exclusion Act of 1882 was significant because it:",
            options: [
                "Established immigration quotas for all countries",
                "Was the first major law restricting immigration based on nationality",
                "Created a path to citizenship for Chinese immigrants already in the U.S.",
                "Expanded trade with China"
            ],
            answer: 1,
            explanation: "The Chinese Exclusion Act was the first major U.S. law restricting immigration based on nationality or race, prohibiting Chinese labor immigration and denying Chinese immigrants the right to naturalization."
        },
        {
            question: "Which of the following best describes the goals of the Populist Movement of the 1890s?",
            options: [
                "Expanding America's overseas empire",
                "Supporting big business and industrial growth",
                "Addressing economic problems of farmers through government action",
                "Restricting immigration"
            ],
            answer: 2,
            explanation: "The Populist (People's) Party advocated for farmers' interests through proposals like inflation (free silver), government ownership of railroads and telegraphs, a graduated income tax, and direct election of senators."
        },
        {
            question: "What was the impact of the Dawes Act (1887) on Native Americans?",
            options: [
                "It strengthened tribal sovereignty",
                "It significantly reduced Native American landholdings while attempting forced assimilation",
                "It created autonomous reservations free from federal control",
                "It granted full citizenship rights to all Native Americans"
            ],
            answer: 1,
            explanation: "The Dawes Act divided tribal lands into individual allotments to promote assimilation. The policy resulted in Native Americans losing about two-thirds of their land through fraud, tax sales, and forced sales, while undermining tribal culture and governance."
        },
        {
            question: "The 'New Immigration' of the late 19th century differed from earlier immigration primarily because:",
            options: [
                "It involved fewer total immigrants",
                "Immigrants came primarily from Northern and Western Europe",
                "Immigrants came primarily from Southern and Eastern Europe",
                "Most immigrants were political refugees rather than economic migrants"
            ],
            answer: 2,
            explanation: "The 'New Immigration' (1880s-1920s) brought people primarily from Southern and Eastern Europe (Italians, Poles, Russians, Greeks, etc.), contrasting with earlier immigrants who had mainly come from Northern and Western Europe."
        },
        {
            question: "Which labor organization was led by Samuel Gompers?",
            options: [
                "Knights of Labor",
                "Industrial Workers of the World (IWW)",
                "American Federation of Labor (AFL)",
                "Congress of Industrial Organizations (CIO)"
            ],
            answer: 2,
            explanation: "Samuel Gompers founded and led the American Federation of Labor (AFL), which focused on skilled craft workers organized by trade rather than industry and pursued 'bread and butter' issues rather than broad social transformation."
        },
        {
            question: "What was the significance of the Supreme Court case Plessy v. Ferguson (1896)?",
            options: [
                "It struck down segregation in public schools",
                "It established the 'separate but equal' doctrine, allowing legal segregation",
                "It granted voting rights to African Americans",
                "It prohibited discrimination in interstate commerce"
            ],
            answer: 1,
            explanation: "Plessy v. Ferguson upheld the constitutionality of state laws requiring racial segregation in public facilities under the doctrine of 'separate but equal,' which remained the legal basis for segregation until Brown v. Board of Education (1954)."
        },
        {
            question: "The settlement house movement, exemplified by Jane Addams' Hull House, primarily sought to:",
            options: [
                "Provide charity to the urban poor",
                "Convert immigrants to Protestant Christianity",
                "Address urban problems through community centers and social reform",
                "Encourage immigrants to return to their home countries"
            ],
            answer: 2,
            explanation: "The settlement house movement established community centers in poor urban neighborhoods to provide services like education, childcare, and cultural programs while advocating for reforms in housing, public health, child labor, and working conditions."
        }
    ],
    period7: [
        {
            question: "Which of the following was NOT a major goal of the Progressive movement?",
            options: [
                "Political reforms such as direct election of senators",
                "Regulation of business and industry",
                "Abolition of all government intervention in the economy",
                "Social welfare measures to help the urban poor"
            ],
            answer: 2,
            explanation: "Progressives generally favored MORE government intervention to address problems of industrialization and urbanization, not abolition of government regulation. They sought to make government more efficient and responsive to public needs."
        },
        {
            question: "Upton Sinclair's novel 'The Jungle' led most directly to:",
            options: [
                "The end of child labor",
                "The passage of the Pure Food and Drug Act",
                "The breakup of Standard Oil",
                "The creation of the Federal Reserve"
            ],
            answer: 1,
            explanation: "Sinclair's graphic portrayal of unsanitary conditions in the meatpacking industry created public outrage that led to the passage of the Pure Food and Drug Act and the Meat Inspection Act in 1906, though his intended focus on worker exploitation received less attention."
        },
        {
            question: "Theodore Roosevelt's 'Square Deal' policies included:",
            options: [
                "Opposition to all business regulation",
                "Support for labor unions against management",
                "Consumer protection and conservation of natural resources",
                "Reduced federal authority in domestic affairs"
            ],
            answer: 2,
            explanation: "Roosevelt's Square Deal focused on regulating big business ('trust-busting'), protecting consumers, and conserving natural resources, positioning the president as a mediator between competing interests rather than consistently favoring either business or labor."
        },
        {
            question: "The United States acquired the Philippines as a result of:",
            options: [
                "The Spanish-American War",
                "The Mexican-American War",
                "The War of 1812",
                "Direct purchase from Spain"
            ],
            answer: 0,
            explanation: "The United States acquired the Philippines from Spain through the Treaty of Paris (1898) following the Spanish-American War, leading to the Philippine-American War when Filipino nationalists who had expected independence resisted American control."
        },
        {
            question: "What was the primary purpose of the Federal Reserve System, created in 1913?",
            options: [
                "To provide loans to farmers",
                "To establish a minimum wage",
                "To stabilize the banking system and manage monetary policy",
                "To collect federal income taxes"
            ],
            answer: 2,
            explanation: "The Federal Reserve was created to provide a more stable and flexible banking system after financial panics, especially the Panic of 1907. It was designed to regulate currency, supervise banks, and manage monetary policy."
        },
        {
            question: "The primary reason the United States entered World War I was:",
            options: [
                "The assassination of Archduke Franz Ferdinand",
                "German submarine warfare and the Zimmermann Telegram",
                "The desire to spread democracy globally",
                "Treaty obligations with Britain and France"
            ],
            answer: 1,
            explanation: "While multiple factors influenced U.S. entry into WWI, Germany's resumption of unrestricted submarine warfare (sinking American ships) and the Zimmermann Telegram (proposing a German alliance with Mexico against the U.S.) were the immediate triggers."
        },
        {
            question: "Which of the following best describes the Red Scare of 1919-1920?",
            options: [
                "Fear of Native American uprisings",
                "Concern about Soviet espionage during the Cold War",
                "Fear of communist revolution following World War I and the Russian Revolution",
                "Panic over a series of natural disasters"
            ],
            answer: 2,
            explanation: "The First Red Scare reflected fears of communist revolution in the U.S. following the Russian Revolution, labor unrest, bombings by anarchists, and general postwar social tensions, leading to arrests, deportations, and civil liberties violations."
        },
        {
            question: "Which of the following was a key cause of the Great Depression?",
            options: [
                "Overproduction and weak consumer demand",
                "Excessive government regulation of business",
                "The New Deal's deficit spending",
                "Foreign competition from Japan and Germany"
            ],
            answer: 0,
            explanation: "Overproduction and weak consumer demand were key causes of the Depression. Other factors included uneven distribution of wealth, agricultural crisis, stock market speculation, weak banking structures, and international economic imbalances."
        },
        {
            question: "The New Deal program that provided jobs through public works projects was the:",
            options: [
                "Agricultural Adjustment Administration (AAA)",
                "Securities and Exchange Commission (SEC)",
                "Works Progress Administration (WPA)",
                "National Recovery Administration (NRA)"
            ],
            answer: 2,
            explanation: "The Works Progress Administration (WPA) was the largest New Deal agency, employing millions of people to carry out public works projects, including buildings, roads, bridges, and arts projects, between 1935 and 1943."
        },
        {
            question: "What event directly led to U.S. entry into World War II?",
            options: [
                "German invasion of Poland",
                "Fall of France to Nazi Germany",
                "Japanese attack on Pearl Harbor",
                "Battle of Britain"
            ],
            answer: 2,
            explanation: "The Japanese attack on Pearl Harbor, Hawaii, on December 7, 1941, resulted in Congress declaring war on Japan the next day. Germany and Italy, as Japan's allies, declared war on the United States three days later."
        }
    ],
    period8: [
        {
            question: "The policy of containment, first articulated by George Kennan, called for:",
            options: [
                "The immediate liberation of all communist countries",
                "Preventing further expansion of Soviet influence",
                "Direct military confrontation with the Soviet Union",
                "Economic isolation of the Soviet bloc"
            ],
            answer: 1,
            explanation: "Containment policy aimed to prevent further expansion of Soviet influence rather than rolling back existing communist control or directly confronting the USSR militarily, recognizing the dangers of nuclear conflict."
        },
        {
            question: "Which of the following was NOT a component of President Truman's Fair Deal?",
            options: [
                "National health insurance",
                "Civil rights legislation",
                "Tax cuts for businesses",
                "Expansion of public housing"
            ],
            answer: 2,
            explanation: "Truman's Fair Deal did not include tax cuts for businesses. It proposed expanding New Deal programs with national health insurance, civil rights legislation, education aid, housing programs, and a higher minimum wage, though Congress enacted only portions of it."
        },
        {
            question: "The Brown v. Board of Education decision (1954):",
            options: [
                "Required immediate integration of all public facilities",
                "Declared 'separate but equal' education unconstitutional",
                "Established federal funding for predominantly minority schools",
                "Created the Civil Rights Commission"
            ],
            answer: 1,
            explanation: "Brown v. Board of Education unanimously ruled that 'separate educational facilities are inherently unequal,' overturning the 'separate but equal' doctrine from Plessy v. Ferguson and declaring segregation in public schools unconstitutional."
        },
        {
            question: "The Cuban Missile Crisis of 1962 resulted in:",
            options: [
                "A U.S. invasion of Cuba",
                "The overthrow of Fidel Castro",
                "Soviet removal of missiles from Cuba in exchange for U.S. concessions",
                "A direct military confrontation between the U.S. and USSR"
            ],
            answer: 2,
            explanation: "The crisis was resolved when the Soviet Union agreed to remove missiles from Cuba in exchange for U.S. pledges not to invade Cuba and the secret removal of U.S. missiles from Turkey, avoiding what might have been a nuclear war."
        },
        {
            question: "The Gulf of Tonkin Resolution (1964):",
            options: [
                "Formally declared war on North Vietnam",
                "Authorized the president to take military action in Vietnam without a formal declaration of war",
                "Established a peace treaty ending the Vietnam conflict",
                "Created a defensive alliance with South Vietnam"
            ],
            answer: 1,
            explanation: "The Gulf of Tonkin Resolution, passed after alleged North Vietnamese attacks on U.S. ships, gave President Johnson authority to use military force without a formal declaration of war, effectively giving him a blank check for Vietnam War escalation."
        },
        {
            question: "Which of the following was NOT achieved by the Civil Rights Act of 1964?",
            options: [
                "Prohibition of discrimination in public accommodations",
                "Ban on employment discrimination",
                "Prohibition of discrimination in federally funded programs",
                "Guarantee of voting rights for African Americans"
            ],
            answer: 3,
            explanation: "The Civil Rights Act of 1964 did not specifically address voting rights; those protections came the following year with the Voting Rights Act of 1965, which prohibited discriminatory voting practices."
        },
        {
            question: "President Lyndon Johnson's Great Society programs included:",
            options: [
                "Significant tax cuts for all income brackets",
                "Medicare, Medicaid, and education funding",
                "Deregulation of major industries",
                "Reduction in federal social spending"
            ],
            answer: 1,
            explanation: "Johnson's Great Society included Medicare (health insurance for elderly), Medicaid (health insurance for low-income), education funding, environmental protection, consumer safeguards, and anti-poverty programs in an ambitious domestic agenda."
        },
        {
            question: "The Watergate scandal resulted in:",
            options: [
                "The impeachment and removal of President Nixon",
                "Nixon's resignation before impeachment proceedings were completed",
                "A Supreme Court ruling limiting executive privilege",
                "The Democratic Party winning the 1972 presidential election"
            ],
            answer: 1,
            explanation: "While the House Judiciary Committee approved articles of impeachment, Nixon resigned in August 1974 before the full House could vote, becoming the only U.S. president to resign. The scandal did lead to Supreme Court rulings on executive privilege."
        },
        {
            question: "The women's movement of the 1960s and 1970s achieved which of the following legal changes?",
            options: [
                "Constitutional guarantee of equal pay for equal work",
                "Passage of the Equal Rights Amendment",
                "Title IX prohibiting sex discrimination in education",
                "Federal funding for childcare for all working mothers"
            ],
            answer: 2,
            explanation: "Title IX of the Education Amendments of 1972 prohibited sex discrimination in federally funded education programs, significantly expanding opportunities for women in academics and athletics. The Equal Rights Amendment was never ratified."
        },
        {
            question: "What economic condition plagued the United States during the 1970s?",
            options: [
                "Deflation",
                "Stagflation",
                "Hyperinflation",
                "Economic depression"
            ],
            answer: 1,
            explanation: "Stagflation - the combination of high inflation and high unemployment/economic stagnation - characterized the 1970s economy. It was exacerbated by oil shocks, the end of the Bretton Woods system, and declining productivity growth."
        }
    ],
    period9: [
        {
            question: "Reagan's economic policies, often called 'Reaganomics,' included:",
            options: [
                "Increased taxes and government spending",
                "Nationalization of key industries",
                "Tax cuts, deregulation, and reduced social spending",
                "Wage and price controls"
            ],
            answer: 2,
            explanation: "Reaganomics featured major tax cuts (especially for higher incomes), deregulation of business, reduced social spending, and an anti-inflation monetary policy, based on supply-side economic theory that tax cuts would stimulate growth and increase revenue."
        },
        {
            question: "Which event symbolized the end of the Cold War?",
            options: [
                "The Cuban Missile Crisis",
                "The Vietnam War",
                "The fall of the Berlin Wall",
                "The Korean War"
            ],
            answer: 2,
            explanation: "The fall of the Berlin Wall in November 1989 symbolized the end of the Cold War division of Europe. The Berlin Wall had been the most visible symbol of the Iron Curtain since its construction in 1961."
        },
        {
            question: "The North American Free Trade Agreement (NAFTA) was designed to:",
            options: [
                "Create a common currency for North America",
                "Establish a military alliance between the U.S., Canada, and Mexico",
                "Reduce trade barriers between the U.S., Canada, and Mexico",
                "Implement uniform environmental regulations across North America"
            ],
            answer: 2,
            explanation: "NAFTA, implemented in 1994, reduced or eliminated tariffs and other trade barriers between the United States, Canada, and Mexico, creating one of the world's largest free trade zones but generating controversy about its economic and social impacts."
        },
        {
            question: "The impeachment of President Bill Clinton in 1998 was based on charges of:",
            options: [
                "Bribery and corruption",
                "Abuse of power and obstruction of Congress",
                "Perjury and obstruction of justice",
                "Campaign finance violations"
            ],
            answer: 2,
            explanation: "Clinton was impeached by the House of Representatives on charges of perjury and obstruction of justice related to his testimony about his relationship with White House intern Monica Lewinsky. He was acquitted by the Senate."
        },
        {
            question: "What was the immediate U.S. response to the terrorist attacks of September 11, 2001?",
            options: [
                "Invasion of Iraq",
                "Military action against Afghanistan's Taliban regime",
                "Formation of the United Nations Counterterrorism Committee",
                "Creation of a Palestinian state to address Middle East grievances"
            ],
            answer: 1,
            explanation: "The immediate U.S. military response was Operation Enduring Freedom, launched against Afghanistan's Taliban regime for harboring Al-Qaeda and Osama bin Laden. The Iraq War came later, in 2003, based on separate justifications."
        },
        {
            question: "The 2008 financial crisis was primarily triggered by problems in which sector?",
            options: [
                "Manufacturing",
                "Housing and mortgage lending",
                "Retail",
                "Agriculture"
            ],
            answer: 1,
            explanation: "The 2008 financial crisis originated in the housing and mortgage sectors, with subprime mortgage lending, mortgage-backed securities, and complex financial derivatives leading to a banking crisis when housing prices collapsed."
        },
        {
            question: "The Affordable Care Act (Obamacare) was designed to:",
            options: [
                "Create a single-payer healthcare system",
                "Privatize Medicare",
                "Expand health insurance coverage while maintaining the private insurance system",
                "Transfer healthcare regulation entirely to the states"
            ],
            answer: 2,
            explanation: "The Affordable Care Act aimed to expand coverage through individual mandates, insurance marketplaces, subsidies, and Medicaid expansion, while maintaining the primarily private insurance system rather than creating a single-payer or government-run system."
        },
        {
            question: "Which Supreme Court case legalized same-sex marriage nationwide?",
            options: [
                "United States v. Windsor",
                "Obergefell v. Hodges",
                "Lawrence v. Texas",
                "Bostock v. Clayton County"
            ],
            answer: 1,
            explanation: "Obergefell v. Hodges (2015) established that the fundamental right to marry is guaranteed to same-sex couples under the Due Process and Equal Protection clauses of the Fourteenth Amendment, effectively legalizing same-sex marriage nationwide."
        },
        {
            question: "Which of the following has been a central focus of the Black Lives Matter movement?",
            options: [
                "Promoting international trade agreements",
                "Reforming the tax code",
                "Addressing police violence against Black Americans",
                "Supporting increased military spending"
            ],
            answer: 2,
            explanation: "The Black Lives Matter movement, emerging after the killing of Trayvon Martin and subsequent acquittal of George Zimmerman, has focused particularly on police violence against Black Americans and broader issues of systemic racism in the criminal justice system."
        },
        {
            question: "What issue has been at the center of debates about climate policy in the United States?",
            options: [
                "Whether climate change is occurring",
                "The economic costs of climate policies versus the environmental benefits",
                "Whether climate change is caused by volcanic activity",
                "The impact of climate change on extraterrestrial colonization"
            ],
            answer: 1,
            explanation: "While scientific consensus on climate change exists, U.S. policy debates have centered on the economic costs of proposed regulations and clean energy transitions versus the environmental and social benefits of addressing climate change."
        }
    ]
};

// Elements
let currentPeriod = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// Function to start the quiz
function startQuiz() {
    // Get selected period
    currentPeriod = document.getElementById('period-select').value;
    
    // Get questions for this period
    currentQuestions = [...quizData[currentPeriod]];
    
    // Shuffle questions
    currentQuestions = shuffleArray(currentQuestions).slice(0, 10);
    
    // Reset variables
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(-1);
    score = 0;
    
    // Update period title
    document.getElementById('period-title').textContent = document.getElementById('period-select').options[document.getElementById('period-select').selectedIndex].text;
    
    // Show quiz container
    document.getElementById('quiz-container').style.display = 'block';
    document.querySelector('.quiz-selection').style.display = 'none';
    document.getElementById('quiz-summary').style.display = 'none';
    
    // Load first question
    loadQuestion();
}

// Function to load question
function loadQuestion() {
    // Get current question
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    // Update question text
    document.getElementById('question').textContent = currentQuestion.question;
    
    // Clear previous options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    // Add options
    currentQuestion.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.dataset.index = index;
        optionDiv.textContent = option;
        
        // Add click event
        optionDiv.addEventListener('click', () => {
            // Remove selected class from all options
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            optionDiv.classList.add('selected');
            
            // Enable submit button
            document.getElementById('submit-btn').disabled = false;
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update progress
    document.getElementById('progress').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    // Hide result
    document.getElementById('result').style.display = 'none';
    
    // Show submit button, hide next button
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').disabled = true;
}

// Function to handle submission
function handleSubmit() {
    // Get selected option
    const selectedOption = document.querySelector('.quiz-option.selected');
    if (!selectedOption) return;
    
    const selectedIndex = parseInt(selectedOption.dataset.index);
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    // Save answer
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    // Check answer
    const isCorrect = selectedIndex === currentQuestion.answer;
    if (isCorrect) {
        score++;
    }
    
    // Show correct and incorrect answers
    document.querySelectorAll('.quiz-option').forEach((option, index) => {
        if (index === currentQuestion.answer) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
        
        // Disable clicking
        option.style.pointerEvents = 'none';
    });
    
    // Show result
    const resultElement = document.getElementById('result');
    if (isCorrect) {
        resultElement.textContent = 'Correct! ' + currentQuestion.explanation;
        resultElement.style.color = '#4CAF50';
    } else {
        resultElement.textContent = 'Incorrect. The correct answer is: ' + 
                                   currentQuestion.options[currentQuestion.answer] + 
                                   '. ' + currentQuestion.explanation;
        resultElement.style.color = '#f44336';
    }
    resultElement.style.display = 'block';
    
    // Show next button, hide submit button
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
    
    // Update next button text if last question
    if (currentQuestionIndex === currentQuestions.length - 1) {
        document.getElementById('next-btn').textContent = 'Finish Quiz';
    } else {
        document.getElementById('next-btn').textContent = 'Next Question';
    }
}

// Function to handle next question
function handleNext() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        // Load next question
        loadQuestion();
    } else {
        // Show summary
        showSummary();
    }
}

// Function to show summary
function showSummary() {
    // Hide quiz container
    document.getElementById('quiz-container').style.display = 'none';
    
    // Show summary
    const summaryElement = document.getElementById('quiz-summary');
    summaryElement.style.display = 'block';
    
    // Update score
    document.getElementById('score-number').textContent = score;
    
    // Update score message
    const scoreMessage = document.getElementById('score-message');
    const percentage = (score / currentQuestions.length) * 100;
    
    if (percentage >= 90) {
        scoreMessage.textContent = 'Excellent! You have a strong understanding of this period.';
    } else if (percentage >= 70) {
        scoreMessage.textContent = 'Good job! Keep studying to master this period.';
    } else if (percentage >= 50) {
        scoreMessage.textContent = 'You\'re on the right track, but need more review of this period.';
    } else {
        scoreMessage.textContent = 'This period needs significant review. Keep studying!';
    }
    
    // Show question review
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const isCorrect = userAnswers[index] === question.answer;
        reviewItem.classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
        
        reviewItem.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <p>Your answer: ${userAnswers[index] >= 0 ? question.options[userAnswers[index]] : 'Not answered'}</p>
            <p>Correct answer: ${question.options[question.answer]}</p>
            <p><em>${question.explanation}</em></p>
        `;
        
        reviewList.appendChild(reviewItem);
    });
}

// Helper function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-quiz');
    const submitButton = document.getElementById('submit-btn');
    const nextButton = document.getElementById('next-btn');
    const retryButton = document.getElementById('retry-btn');
    const newPeriodButton = document.getElementById('new-period-btn');
    
    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', handleSubmit);
    nextButton.addEventListener('click', handleNext);
    
    retryButton.addEventListener('click', () => {
        // Reset and start the same period again
        startQuiz();
    });
    
    newPeriodButton.addEventListener('click', () => {
        // Show period selection
        document.getElementById('quiz-summary').style.display = 'none';
        document.querySelector('.quiz-selection').style.display = 'block';
    });

   // Add styles for review items
   const style = document.createElement('style');
   style.textContent = `
       .review-item {
           margin-bottom: 15px;
           padding: 10px;
           border-radius: 5px;
       }
       .correct-answer {
           background-color: rgba(76, 175, 80, 0.2);
           border-left: 4px solid #4CAF50;
       }
       .incorrect-answer {
           background-color: rgba(244, 67, 54, 0.2);
           border-left: 4px solid #f44336;
       }
   `;
   document.head.appendChild(style);
});