# anyasichineme.com

My personal portfolio site: **[anyasichineme.com](https://anyasichineme.com)**

I'm Anyasi Chineme, a cloud engineer working mainly on AWS, Terraform and CI/CD. The site lists my projects, certifications and experience. Each project page links to its GitHub repo, where the code, architecture and evidence live.

## Projects on the site

| Project | What it shows | Repo |
| --- | --- | --- |
| DocFlow | Migrating a single-server app to ECS Fargate, RDS, S3 and SQS: 101 Terraform resources, zero-data-loss migration, security scanning, cost model, monitoring and DR drills | [docflow](https://github.com/cyberN3m3/docflow) |
| AWS Cost Optimization Dashboard | Serverless scanner for idle and wasted resources across every region, weekly email report | [AWS-Cost-Optimization-Dashboard](https://github.com/cyberN3m3/AWS-Cost-Optimization-Dashboard) |
| Zero-Trust Remote Workforce Platform | 3-tier VPC with private compute and database, ALB, Cognito, React + TypeScript dashboard | [remote-workforce-platform](https://github.com/cyberN3m3/remote-workforce-platform) |
| Global Shield | Multi-region failover with CloudFront origin groups across us-east-1 and us-west-2 | [Global-Shield-Dashboard](https://github.com/cyberN3m3/Global-Shield-Dashboard) |
| LinkSnap | Serverless URL shortener on Lambda, API Gateway and DynamoDB | [URL-SHORTNER](https://github.com/cyberN3m3/URL-SHORTNER) |

## Built with

- [Next.js](https://nextjs.org) and MDX: each project is one `.mdx` file in `src/app/work/projects/`
- [Once UI](https://once-ui.com) components, starting from the [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template by Once UI
- TypeScript, Sass, Biome for formatting

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Where things are

| To change | Edit |
| --- | --- |
| Name, role, links, about page, experience, certifications | `src/resources/content.tsx` |
| Site URL, enabled pages, theme | `src/resources/once-ui.config.ts` |
| Projects | `src/app/work/projects/*.mdx` (images in `public/images/projects/`) |

## Contact

- Email: [anyasichineme.p@gmail.com](mailto:anyasichineme.p@gmail.com)
- LinkedIn: [linkedin.com/in/anyasichineme](https://www.linkedin.com/in/anyasichineme)
- GitHub: [cyberN3m3](https://github.com/cyberN3m3)

## License

The template code is licensed under [CC BY-NC 4.0](LICENSE) by Once UI. My content (text, photos, project write-ups) is mine; please don't reuse it.
