import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
export interface HelloState { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
// export class Hello extends React.Component<HelloProps, undefined> {
export class Hello extends React.Component<HelloProps, HelloState> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}
