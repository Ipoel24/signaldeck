CREATE TABLE IF NOT EXISTS "users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "email" text NOT NULL,
  "name" text,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "users_email_unique" UNIQUE("email")
);

CREATE TABLE IF NOT EXISTS "sources" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "name" text NOT NULL,
  "type" text NOT NULL,
  "url" text NOT NULL,
  "enabled" boolean DEFAULT true NOT NULL,
  "last_fetched_at" timestamp with time zone,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "items" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "source_id" uuid NOT NULL,
  "external_id" text NOT NULL,
  "title" text NOT NULL,
  "url" text NOT NULL,
  "content" text,
  "summary" text,
  "published_at" timestamp with time zone,
  "relevance_score" integer,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "topics" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "slug" text NOT NULL,
  "name" text NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "topics_slug_unique" UNIQUE("slug")
);

CREATE TABLE IF NOT EXISTS "item_topics" (
  "item_id" uuid NOT NULL,
  "topic_id" uuid NOT NULL,
  CONSTRAINT "item_topics_item_id_topic_id_pk" PRIMARY KEY("item_id","topic_id")
);

ALTER TABLE "items" ADD CONSTRAINT "items_source_id_sources_id_fk"
  FOREIGN KEY ("source_id") REFERENCES "public"."sources"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "item_topics" ADD CONSTRAINT "item_topics_item_id_items_id_fk"
  FOREIGN KEY ("item_id") REFERENCES "public"."items"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "item_topics" ADD CONSTRAINT "item_topics_topic_id_topics_id_fk"
  FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;

CREATE INDEX IF NOT EXISTS "sources_enabled_idx" ON "sources" USING btree ("enabled");
CREATE INDEX IF NOT EXISTS "sources_type_idx" ON "sources" USING btree ("type");
CREATE UNIQUE INDEX IF NOT EXISTS "items_source_external_uid" ON "items" USING btree ("source_id","external_id");
CREATE INDEX IF NOT EXISTS "items_source_id_idx" ON "items" USING btree ("source_id");
CREATE INDEX IF NOT EXISTS "items_published_at_idx" ON "items" USING btree ("published_at");
CREATE INDEX IF NOT EXISTS "items_relevance_score_idx" ON "items" USING btree ("relevance_score");
CREATE INDEX IF NOT EXISTS "item_topics_topic_id_idx" ON "item_topics" USING btree ("topic_id");
