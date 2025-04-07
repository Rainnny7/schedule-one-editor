import { useQuery } from "@tanstack/react-query";
import request from "~/lib/request";

export const useGithubStars = (owner: string, repo: string) =>
    useQuery({
        queryKey: ["github-stars", owner, repo],
        queryFn: async () =>
            (
                await request.get<{ stargazers_count: number }>(
                    `https://api.github.com/repos/${owner}/${repo}`
                )
            )?.stargazers_count,
    });
