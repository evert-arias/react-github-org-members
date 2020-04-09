import React from "react";
import { Octokit } from "@octokit/rest";
import { MembersList, Profile, Photo, Intro, Name, Subtitle } from "./styles";

class ProfileComponent extends React.Component {
  render() {
    return (
      <Profile href={this.props.url}>
        <Photo src={this.props.avatar_url} />
        <Intro>
          <Name>{this.props.name}</Name>
          <Subtitle>Type: Member</Subtitle>
        </Intro>
      </Profile>
    );
  }
}

export default class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  loadMembers(org, token) {
    return new Promise((resolve, reject) => {
      const octokit = new Octokit({
        auth: token
      });
      octokit.orgs.listMembers({ org: org }).then(
        result => {
          resolve(result.data);
        },
        reason => {
          reject(reason);
        }
      );
    });
  }

  componentDidMount() {
    if (this.props.org) {
      this.loadMembers(this.props.org, this.props.token).then(members => {
        this.setState({ members: [...members] });
      });
    }
  }

  render() {
    return (
      <MembersList>
        {this.state.members && this.state.members.length
          ? this.state.members.map((member, key) => {
              return (
                <ProfileComponent
                  key={key}
                  avatar_url={member.avatar_url}
                  name={member.login}
                  url={member.html_url}
                />
              );
            })
          : undefined}
      </MembersList>
    );
  }
}
