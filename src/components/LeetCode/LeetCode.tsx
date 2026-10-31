import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { Container } from "./styles";
import { LEETCODE_PROFILE_URL, LEETCODE_USERNAME, topicProgress, type TopicCategory } from "./topicProgress";

const topicCategories: TopicCategory[] = ["Advanced", "Intermediate", "Fundamental"];

export function LeetCode() {
  return (
    <Container id="leetcode">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="section-heading">
          <span>CODING JOURNEY / LEETCODE</span>
          <h2>LeetCode Topic Analysis</h2>
          <p>Problem-solving progress across core data structures and algorithms.</p>
        </div>
        <div className="profile-bar">
          <span>PROFILE / <strong>{LEETCODE_USERNAME}</strong></span>
          <a href={LEETCODE_PROFILE_URL} target="_blank" rel="noopener noreferrer">View LeetCode Profile ↗</a>
        </div>
        <div className="topic-layout">
          <div className="topic-groups">
            {topicCategories.map((group) => (
              <section className="topic-group" key={group}>
                <h3><i data-group={group.toLowerCase()} />{group}</h3>
                <div className="topic-pills">
                  {topicProgress.filter((entry) => entry.category === group).map((entry) => (
                    <span key={entry.topic}>{entry.topic}<b>{entry.solved === null ? "Count not set" : `× ${entry.solved}`}</b></span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
}
