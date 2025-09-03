mkdir -p content/java-enterprise
mkdir -p content/spring-ecosystem
mkdir -p content/microservices-architecture
mkdir -p content/database-performance
mkdir -p content/algorithm-design
mkdir -p content/aws-cloud-native

# 2. 创建每个栏目的索引页
for category in java-enterprise spring-ecosystem microservices-architecture database-performance algorithm-design aws-cloud-native; do
  cat > content/$category/_index.md << EOF
---
title: "$(echo $category | tr '-' ' ' | sed 's/\b\w/\U&/g')"
description: "Expert insights and tutorials on $(echo $category | tr '-' ' ')"
layout: "list"
---

Professional guidance and best practices for $(echo $category | tr '-' ' ') development.
EOF
done