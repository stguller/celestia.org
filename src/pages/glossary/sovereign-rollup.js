import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

const title = 'Sovereign rollup';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>A type of rollup that does not use a settlement layer to determine its canonical chain and validity rules. Instead, the canonical chain of the rollup is determined by the nodes in the rollup's peer-to-peer network. This means that settlement occurs on the rollup, rather than a separate settlement layer.
                </p>

                <p>Sovereign rollups have three key benefits:</p>

                <ol>
                    <li>More freedom over the execution environment</li>
                    <li>No sharing of computation resources</li>
                    <li>Ability to hard fork if something goes wrong</li>
                </ol>

                <p>For more information on sovereign rollups, view the blog post <a href="https://blog.celestia.org/sovereign-rollup-chains/">Rollups as sovereign chains</a>.
                </p>

            </div>
        )
    }
}

class GlossarySubpage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <div className={'glossary-subpage'}>
                    <main>
                        <div className={'container'}>
                            <BreadCrumb title={title}/>
                            <h1 className={'main mb-4'}>{title}</h1>

                            <SocialShare title={title} url={this.props.location.href}/>

                            <GlossaryContent/>

                        </div>

                        <div className={'container wide'}>
                            <GlossaryNav url={this.props.location.state && this.props.location.state.url}/>
                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}

export default GlossarySubpage
