import { Component } from "react"
import { ProductsList } from "./ProductsList"
import Head from "next/head"

type HomeProps = {};

type HomeState = {
    filter: string;
}

export class Home extends Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            filter: ''
        };
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Kacheck</title>
                    <link rel="icon" href="/favicon.ico" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-60989222-7"></script>
                </Head>

                <main>
                    <nav className="flex items-center bg-teal-500 p-6">
                        <span className="font-semibold text-xl tracking-tight pr-6">
                            Kacheck
                        </span>
                        <input
                            className="transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-2 lg:pl-10 w-full appearance-none leading-normal ds-input"
                            type="text"
                            placeholder="Search"
                            aria-expanded="false"
                            aria-label="search input"
                            dir="auto"
                            value={this.state.filter}
                            onChange={event => this.setState({ filter: event.target.value })}
                        />
                    </nav>
                    <ProductsList filter={this.state.filter} />
                </main>

                <style jsx global>
                    {
                        `
                                html,
                                body,
                                body > div: first - child,
                                main,
                                div#__next,
                                    div#__next > div,
                                    div#__next > div > div {
                                height: 100 %;
                            }
                        `
                    }</style>
            </div>
        )
    }
}
