<script lang="ts">
      interface Props {
            name: string;
            productName: string;
      }

      let props: Props = $props();
</script>

<div>
      <div>
            <h1>
                  Welcome to {props.productName}!
            </h1>
            <p>Hi {props.name},</p>
            <p>
                  Thank you for subscribing to {props.productName}. We're
                  thrilled to have you on board! Here's what you can expect:
            </p>
            <ul>
                  <li>
                        Exclusive access to our features.
                  </li>
                  <li>
                        Regular updates and new releases.
                  </li>
                  <li>
                        Dedicated customer support.
                  </li>
            </ul>
            <p>
                  If you have any questions, feel free to reply to this email or
                  visit our 
                  <a href="[Support Link]">
                        support center
                  </a>.
            </p>
            <p>
                  Happy exploring!
            </p>
            <p>
                  Best regards,
            </p>
            <p>
                  The {props.productName} Team
            </p>
            <div>
                  <a href="[CTA Link]">
                        Get Started
                  </a>
            </div>
      </div>
</div>