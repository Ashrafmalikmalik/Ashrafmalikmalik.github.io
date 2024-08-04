import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className='col-0'>
            <div className='1'> <br /> <br />
                <div className='col-2'></div>
                <div className='col-3'><img src="https://inteshar.netlify.app/images/ducat.png" alt="logo" height="80vh" width="100%" />
                </div>
                <div className="col-4">
                    <ul className="nav nav-tabs mt-5">
                        <li className="/nav-item">
                            <NavLink to="Home" className="nav-link" >Home</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="Course" className="nav-link">Course</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="/About" className="nav-link" >About</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="/CorporateTraining" className="nav-link" >CorporateTraining</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="/OnliceRegistration" className="nav-link" >OnliceRegistration</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="/Certificate" className="nav-link" >Certificate</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="/Other" className="nav-link" >Other</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-5'></div>
            <div className='col-6'>
                <div className='left'>
                    <div className='col-7'></div>
                    <div className='col-8'> <h1> Our goal is to empower your career ambitions</h1> <br /><br />
                        <input type="text"
                            placeholder=' Search Your Favurite Course Today ' /> &nbsp;  &nbsp;
                        <button className='col-11'> Search</button>
                    </div>
                    <div className='col-9'></div>
                </div>
                <div className='right'> <img src="https://th.bing.com/th/id/OIP.EXzuLGIYiqbsSCpNEfytlgHaHM?rs=1&pid=ImgDetMain" alt="post" height="342vh" width="70%" /></div>

            </div>
            <div className='col-12'> <br />
                <input className='FullNmae'
                    type="text"
                    placeholder='Full Name'
                />  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <input type="text"
                    placeholder='Email Address' /> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <input type="text"
                    placeholder='Phone Number' /> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <input type="text"
                    placeholder='Select a Course' /> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <input type="text"
                    placeholder='Select a Brance' /> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <button type='submit'>Submit</button>
            </div>
            <div className='col-13'><br />
                <div className='col-14'> <h3>📼 Lorem The Essemtial Skills </h3></div>
                <div className='col-15'> <h3>🗣️ Earn Certificates And Degree </h3></div>
                <div className='col-16'><h3>👤 Get Ready for The Next Career</h3></div>
                <div className='col-17'> <h3>📒 Master at Defferent Areas</h3></div>
            </div>
            <div className='col-18'>
                <div className='col-19'> <h1> Explore Top Prograams</h1></div>
                <div className='col-20'>  <button type='submit'>View all</button></div>
            </div> <br /> <br />
            <div className='col-21'>
                <div className='col-22'> <img src="https://cdn.freebiesupply.com/logos/large/2x/mis-logo-png-transparent.png" alt="logo" height="100vh" width="30%" /> MIS Traning Caourse </div>
                <div className='col-23'> <img src="https://th.bing.com/th/id/OIP.7ED5z1rjnVRoxpuxFYeYjAHaHa?rs=1&pid=ImgDetMain" alt="logo" height="105vh" width="30%" /> DIGITAL MARKETING</div>
                <div className='col-24'> <img src="https://th.bing.com/th/id/OIP.olWHU8y7ZDJB0kAAFDVX6gHaNx?rs=1&pid=ImgDetMain" alt="logo" height="105vh" width="30%" /> JAVA EXPOST</div>
                <div className='col-25'> <img src="https://th.bing.com/th/id/OIP.oUKeebab1jrC-QXIQdiU8AHaHZ?w=583&h=582&rs=1&pid=ImgDetMain" alt="logo" height="105vh" width="30%" /> .NET FULL STACK</div>
            </div> <br />
            <div className='col-26'>
                <div className='col-27'> <img src="https://th.bing.com/th/id/OIP.ZTf4Zwce0plf8hN6WJSfdwHaFh?w=750&h=560&rs=1&pid=ImgDetMain" alt="logo" height="100vh" width="30%" /> WEB DESIGNING </div>
                <div className='col-28'> <img src="https://minervainfotech.com/blog/wp-content/uploads/2019/09/Untitled-6-1920x1280.jpg" alt="logo" height="105vh" width="30%" /> UI & UX</div>
                <div className='col-29'> <img src="https://www.weblineindia.com/wp-content/uploads/2016/12/mean-stack.jpg" alt="logo" height="105vh" width="30%" /> MAIN STACK</div>
                <div className='col-30'> <img src="https://th.bing.com/th/id/OIP.S4xedMViZbrvAh_OsCCP4gHaEK?rs=1&pid=ImgDetMain" alt="logo" height="105vh" width="30%" /> DATA ANALYTICS PYTHON</div>
            </div> <br /> <br /> <br /> <br />
            <div className='col-31'> <h1 >OUR LEARNERS WORK AT</h1></div> <br />
            <div className='col-32'> <h3> Ducat learrners word at same of the leading and innovative organizations of </h3> </div>
            <div className='col-33'><h3> today, solving core busniess problems. </h3></div>
            <div align="justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem veritatis suscipit iusto accusamus aperiam esse sapiente repudiandae doloremque voluptas magni rem pariatur inventore dolor, sed placeat delectus ducimus quia recusandae quaerat quam error, iure reiciendis. Quis, est quibusdam expedita sed dolores illo possimus ipsa vero, fugit adipisci unde aut! Provident vel non aliquam voluptatum perferendis cum eligendi et, deserunt distinctio, nam amet debitis! Eum nesciunt quo dignissimos nobis, veniam cum illo esse obcaecati blanditiis aliquid doloremque ipsam culpa architecto voluptatum quasi quis, ratione, iure quae. Deleniti magni delectus ab eveniet rerum voluptatum fugiat perspiciatis, fuga illum veritatis optio pariatur veniam tempora quibusdam animi temporibus perferendis cupiditate odio a debitis. Repellendus quasi quaerat officiis. Quia amet temporibus animi dolore quam quaerat! Impedit repellat, obcaecati vel vitae corrupti necessitatibus beatae cum perspiciatis esse commodi animi? Sint placeat atque architecto laboriosam nemo, beatae cumque minima ratione, fugiat explicabo quidem rem tempora maxime possimus odit nesciunt et eum vel harum velit. Sapiente atque incidunt recusandae magnam, ut tempora exercitationem laborum error doloremque soluta iste similique dignissimos odio earum quis? Quae, praesentium? Molestiae at sed soluta commodi vitae? Magnam praesentium nemo temporibus. Accusantium eius accusamus, porro est nemo quia vitae iure ad excepturi omnis.</div> <br />


            <div align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolor impedit sapiente aliquid et placeat culpa temporibus obcaecati velit nobis fuga quod, consequatur cupiditate incidunt, officia aperiam tempore expedita? Nostrum nesciunt quod nam illum labore eum necessitatibus odio, totam cupiditate dolore. Facilis dolorem odio recusandae sapiente nemo, et quos fugiat error veniam quaerat consectetur ratione labore molestias repudiandae deleniti tempora quibusdam in. Ad nemo, quo fugiat, id ipsa ducimus itaque eos incidunt ullam ipsum tenetur dolorum nostrum alias accusantium error, iusto tempore voluptatem quibusdam numquam perferendis corrupti. Veritatis distinctio, neque, impedit est quisquam itaque molestias aut consectetur in, a sequi pariatur quibusdam delectus unde consequatur incidunt quam? Rem, repellendus cum consectetur vero, aperiam nihil, vel blanditiis nisi ratione debitis doloremque vitae laborum tenetur? Corporis accusantium deleniti ex expedita unde! Amet rerum illo obcaecati iusto repellendus omnis nesciunt. Voluptate sed rem ea quis laudantium ipsam autem quae, amet reprehenderit magni dolorum optio, nulla doloribus, qui velit. Vel ipsam sapiente error earum impedit non, totam veritatis id voluptas dolor esse ad quam facere debitis reprehenderit iure dolore laboriosam aspernatur, sequi illo amet possimus fuga maxime perspiciatis! Deserunt consequuntur quibusdam facilis veritatis omnis eaque eligendi quo? Possimus, amet quae ducimus placeat qui nostrum exercitationem, sequi saepe libero temporibus et. At, quo veniam, modi possimus nam quasi cum laborum molestias maxime quaerat nostrum laboriosam aliquam libero perspiciatis ratione suscipit, a laudantium officiis. Voluptatibus odio, tempora ex reprehenderit sapiente molestiae impedit distinctio pariatur, numquam sequi commodi quas labore quae aspernatur exercitationem soluta quidem optio quo! Inventore temporibus nulla, consectetur impedit sit quia quam, sint necessitatibus, laudantium ab soluta atque. Dicta beatae aliquid voluptas esse quasi perspiciatis quisquam et minima quo assumenda eum deserunt obcaecati vero, libero saepe facilis laborum aut. Exercitationem eveniet minus cupiditate error corporis sequi sapiente qui. Ipsa molestiae ut ex dolorum eveniet cupiditate corrupti similique minima nobis a corporis, deserunt voluptas quaerat molestias accusantium doloremque. Unde placeat laudantium debitis odio accusamus voluptate aliquid deleniti ea quae accusantium sed nisi quam inventore ad assumenda fuga praesentium repellendus provident, dicta ipsum. Voluptatibus saepe laborum sed in inventore nulla ut culpa reiciendis aspernatur mollitia, odit similique nobis explicabo corporis dolor pariatur cupiditate dignissimos, dolore animi cumque illo quam iure ipsam! Enim quas iste natus iure eligendi aliquam odit perferendis ipsum porro doloribus laborum amet dolor, praesentium et ad. Cumque expedita asperiores reprehenderit nihil, repellat quo, nulla temporibus optio repellendus consequuntur ut laboriosam at placeat dolorem! Quibusdam in iste asperiores nam ea, expedita labore obcaecati est officiis, laudantium voluptate placeat dolorum! Rerum maiores voluptates est consequatur corporis. Accusamus aspernatur sunt quis cum! Quo fuga repellendus vero expedita voluptatum minus unde inventore animi quos, odit accusantium rerum voluptates ipsum vitae sapiente tempora id, perferendis laudantium dolorum itaque nisi esse. Vero, exercitationem a consequatur iste in quas porro ipsum? Illum iure odit eum corporis dicta. Quo architecto dolorem optio blanditiis omnis consectetur voluptatem iste quasi consequuntur provident. Architecto labore asperiores, magni minus quam impedit ullam ducimus aspernatur dolorum pariatur sit non maxime incidunt iusto earum ipsa ea officiis!</div>
        </div>
    )
}

export default Header